import styled from "styled-components";
import ItemRoom from "./ItemRoom";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useApi from "../../hooks/useApi";

export default function Rooms({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState();
  const { userData } = useContext(UserContext);
  const { booking } = useApi();

  function sendRoom() {
    booking.postBooking({ userId: userData.user.id, roomId: selectedRoom });
  }

  return (
    <ContainerRooms>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomOptions>
        {rooms.map((room) => (
          <ItemRoom
            key={room.id}
            room={room}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </RoomOptions>
      {selectedRoom ? (
        <Button onClick={sendRoom}>RESERVAR QUARTO</Button>
      ) : null}
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  width: 182px;
  height: 37px;
  border-radius: 4px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;
