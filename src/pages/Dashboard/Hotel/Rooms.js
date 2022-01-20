import styled from "styled-components";
import ItemRoom from "./ItemRoom";
import { useState } from "react";

export default function Rooms({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState();

  return (
    <ContainerRooms>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomOptions>
        {rooms.map((room) => (
          <ItemRoom
            room={room}
            key={room.name}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
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
  margin-right: 17px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-bottom: 8px;
  padding: 20px;
`;
