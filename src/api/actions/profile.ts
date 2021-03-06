import axios from "axios";
import * as Sentry from "@sentry/react";
import { profile } from "../../config/interface";

const get_profile = async (authToken: string): Promise<profile> => {
  if (authToken === undefined || authToken === "") {
    return {
      exists: false,
      isLoading: true,
    };
  }

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const result: profile = await axios
    .get(
      (process.env.REACT_APP_CLOUD_FUNCTION_URL as string) + "/auth0/profile",
      config
    )
    .then((res) => {
      return {
        exists: res.data.exists,
        isLoading: false,
        profile: res.data,
      };
    })
    // 401 Unauthorized Error
    .catch((err) => {
      Sentry.captureException(err);
      return {
        exists: false,
        isLoading: false,
      };
    });
  return result;
};

export default get_profile;
