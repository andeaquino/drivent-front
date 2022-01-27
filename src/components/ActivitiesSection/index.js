import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import Days from "./Days";
import ActivityDay from "../../pages/Dashboard/Activities/ActivityDay";
import ErrorContainer from "../ErrorContainer";

export default function Activities() {
  const [errorCode, setErrorCode] = useState(null);
  const [activitiesInfo, setActivitiesInfo] = useState([]);
  const { activities } = useApi();
  useEffect(() => {
    activities
      .getActivities()
      .then((res) => {
        setActivitiesInfo(res.data);
      })
      .catch((e) => {
        setErrorCode(e.response.data.message);
      });
  }, []);
  return (
    <>
      {!errorCode ? (
        <>
          <Days list={activitiesInfo} />
          <ActivityDay />
        </>
      ) : (
        <ErrorContainer pageTitle="Escolha de atividades" errorMessage={errorCode} />
      )}
    </>
  );
}
