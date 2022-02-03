import { useEffect, useState } from "react";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import Loading from "../Dashboard/Loading";
import ErrorContainer from "../ErrorContainer";
import Button from "../Form/Button";

export default function CertificateSection() {
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
        <Content>
          <PageTitle>Gere seu Certificado</PageTitle>
          <SubTitle>Clique no botão abaixo para gerar seu certificado em pdf:</SubTitle>
          <Button onClick = {() => {}}>
              Gerar Certificado
          </Button>
        </Content>
      ) : (
        <ErrorContainer pageTitle="Gere seu Certificado" errorMessage={errorCode} />
      )}
    </>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SubTitle = styled.h2`
  color: #8e8e8e;
  width: 100%;
  margin: 10px 0px;
`;

const PageTitle = styled.h1`
  font-size: 2em;
`;
