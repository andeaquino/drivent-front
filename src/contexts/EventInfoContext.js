import { useState, useEffect, createContext } from "react";

import Splash from "../components/Splash";

import useApi from "../hooks/useApi";

const EventInfoContext = createContext();
export default EventInfoContext;

export function EventInfoProvider({ children }) {
  const [eventInfo, setEventInfo] = useState(null);
  const [error, setError] = useState(null);
  const api = useApi();

  useEffect(() => {
    api.event.getEventInfo().then(response => {
      setEventInfo(response.data);
    }).catch(error => {
      /* eslint-disable-next-line no-console */
      console.error(error);
      setError(error);
    });
  }, []);

  if (!eventInfo && !error) {
    return (
      <Splash loading />
    );
  }

  if (error) {
    let message = error.response ? error.response.data.message : "Could not connect to server. Please try again later.";
    return (
      <Splash message={message} />
    );
  }

  return (
    <EventInfoContext.Provider value={{ eventInfo, eventInfoError: error }}>
      { children }
    </EventInfoContext.Provider>
  );
}
