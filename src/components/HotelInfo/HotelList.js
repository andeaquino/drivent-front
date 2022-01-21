import { useState, useEffect } from "react";
import styled from "styled-components";
import HotelWrapper from "./HotelWrapper";
import Rooms from "./Rooms";

export default function HotelList({ list }) {
  const [active, setActive] = useState(false);

  useEffect(() => {}, [active]);

  function renderRooms(info) {
    setActive(info);
    console.log(info);
  }
  return (
    <Content>
      <PageTitle>Escolha de hotel e quarto</PageTitle>
      <SubTitle>Primeiro, escolha seu hotel</SubTitle>
      {list.map((info) => (
        <HotelWrapper
          info={info}
          active={active}
          renderRooms={renderRooms}
          key={info.id}
        />
      ))}
      {active ? <Rooms rooms={active.rooms} /> : null}
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

const PageTitle = styled.h1`
  font-size: 2em;
`;

const SubTitle = styled.h2`
  color: #8e8e8e;
  width: 100%;
  margin: 10px 0px;
`;
