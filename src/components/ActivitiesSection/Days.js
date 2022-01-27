import { useState, useEffect } from "react";
import styled from "styled-components";
import DaysWrapper from "./DaysWrapper";

export default function Days({ list }) {
  const [active, setActive] = useState(false);
  useEffect(() => {}, [active]);

  function renderActivities(info) {
    setActive(info);
  }
  return (
    <Content>
      <PageTitle>Escolha de atividades</PageTitle>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      {list?.map((info) => (
        <DaysWrapper
          info={info}
          active={active}
          renderActivities={renderActivities}
          key={info.id}
        />
      ))}
      {active ? "Renderize o cronograma aqui, Pedro" : null}
    </Content>
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
