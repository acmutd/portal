import axios from "axios";
import * as Sentry from "@sentry/react";
import { events_set } from "../../config/interface";

const get_events = async (authToken: string): Promise<events_set> => {
  if (authToken === undefined || authToken === "") {
    return {
      isLoading: true,
    };
  }

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const result: events_set = await axios
    .get(
      (process.env.REACT_APP_CLOUD_FUNCTION_URL as string) + "/auth0/events", //Is this a valid URL
      config
    )
    .then((res) => {
      return {
        ...res.data,
        isLoading: false,
      };
    })
    // 401 Unauthorized Error
    .catch((err) => {
      Sentry.captureException(err);
      return {
        isLoading: false,
      };
    });
  return result;
};

export default get_events;
