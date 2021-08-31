import React, { useEffect, useState } from "react";
import Message from "./GenericMessage";
import { useAuth0 } from "@auth0/auth0-react";
import { jwt } from "../../api/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import { env } from '../../environment'

const EventPage = () => {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useRecoilState(jwt);
  const [apiComplete, setApiComplete] = useState(false);
  const [event, setEvent] = useState("");

  useEffect(() => {
    const fn = async () => {
      if (isAuthenticated && !token.isSet) {
        setToken({ token: await getAccessTokenSilently(), isSet: true });
      }
    };
    fn();
  }, [isLoading, isAuthenticated, token, setToken, getAccessTokenSilently]);

  useEffect(() => {
    const fn = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
      };
      const result = await axios.get(
        (env.CLOUD_FUNCTION_URL as string) +
          "/auth0/checkin" +
          "?checkpath=" +
          window.location.pathname,
        config
      );
      setApiComplete(true);
      setEvent(result.data.event_name);
    };
    fn();
  }, [getAccessTokenSilently]);

  return (
    <Message
      title="Thanks for attending!"
      loading={!apiComplete}
      desc={`Your participation at ${event} has been recorded`}
      buttonText="Open Profile"
      buttonURL="/profile"
    />
  );
};

export default EventPage;
