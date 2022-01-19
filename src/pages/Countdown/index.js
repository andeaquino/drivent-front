import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Timer from "./Timer";
import Page from "../../components/Page";

import EventInfoContext from "../../contexts/EventInfoContext";

export default function Countdown() {
  const { eventInfo, loadingEventInfo } = useContext(EventInfoContext);
  const history = useHistory();

  function onZero() {
    history.push("/enroll");
  }

  if (loadingEventInfo) {
    return "Loading...";
  }

  return (
    <Page background={eventInfo.backgroundImage}>
      <div>Faltam</div>
      <Timer time={eventInfo.startDate} onZero={onZero} />
      <div>Para as inscrições</div>
    </Page>
  );
}
