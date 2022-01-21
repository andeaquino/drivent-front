import { useState } from "react";
import styled from "styled-components";
export default function HotelList({ list }) {
  const [active, setActive] = useState(false);
  return (
    <Content>
      <PageTitle>Escolha de hotel e quarto</PageTitle>
      <SubTitle>Primeiro, escolha seu hotel</SubTitle>
      {list.map((info) => (
        <HotelWrapper selected={active} onClick={() => setActive(!active)} key={info.id}>
          <img src={info.img} alt="" />
          <h3>{info.name}</h3>
          <p>
            Tipo de acomodação:
            <span>{info.availableTypes.map((types) => types + " ")} </span>
          </p>
          <p>
            Vagas disponíveis:
            <span>{info.totalVacancy}</span>
          </p>
        </HotelWrapper>
      ))}
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

const HotelWrapper = styled.div`
  width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.selected ? "#FFEED2" : "#e5e5e5")};
  border-radius: 8px;
  padding: 15px;
  margin-top: 0px;
  gap: 15px;
  cursor: pointer;

  img {
    width: 170px;
    height: 110px;
    border-radius: 8px;
  }

  h3 {
    font-size: 20px;
    color: #343434;
  }

  p {
    font-size: 12px;
    font-weight: 700;
    color: #3c3c3c;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: 200;
  }
`;

const SubTitle = styled.h2`
  color: #8e8e8e;
  width: 100%;
  margin: 10px 0px;
`;
