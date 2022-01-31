import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import Days from "./Days";
import ErrorContainer from "../ErrorContainer";
import Loading from "../Dashboard/Loading";

export default function Activities() {
  const [errorCode, setErrorCode] = useState(null);
  const [activitiesInfo, setActivitiesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { activities } = useApi();

  useEffect(() => {
    setLoading(true);
    activities
      .getActivities()
      .then((res) => {
        setActivitiesInfo(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setErrorCode(e.response.data.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? <Loading /> : !errorCode ? (
        <Days list={activitiesInfo} />
      ) : (
        <ErrorContainer pageTitle="Escolha de atividades" errorMessage={errorCode} />
      )}
    </>
  );
}
