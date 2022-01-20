import styled from "styled-components";
import ItemRoom from "./ItemRoom";

export default function Rooms() {
  const item = [
    {
      name: "123",
      totalVacancies: 3,
      availableVacancies: 1,
    },
    {
      name: "124",
      totalVacancies: 2,
      availableVacancies: 1,
    },
    {
      name: "125",
      totalVacancies: 1,
      availableVacancies: 0,
    },
    {
      name: "126",
      totalVacancies: 3,
      availableVacancies: 3,
    },
    {
      name: "127",
      totalVacancies: 3,
      availableVacancies: 2,
    },
    {
      name: "128",
      totalVacancies: 3,
      availableVacancies: 2,
    },
  ];
  return (
    <ContainerRooms>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomOptions>
        {item.map((room) => (
          <ItemRoom room={room} key={room.name} />
        ))}
      </RoomOptions>
    </ContainerRooms>
  );
}

const ContainerRooms = styled.div``;

const Title = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-top: 52px;
  margin-bottom: 33px;
`;

const RoomOptions = styled.div`
  display: flex;
  white-space: pre-wrap;
  margin-right: 17px;
  margin-bottom: 8px;
`;
