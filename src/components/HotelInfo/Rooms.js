import styled from "styled-components";
import ItemRoom from "./ItemRoom";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function Rooms({ rooms, setIsRoomChanged }) {
  const [selectedRoom, setSelectedRoom] = useState();
  const { userData } = useContext(UserContext);
  const { booking } = useApi();

  function sendRoom() {
    booking
      .postBooking({ userId: userData.user.id, roomId: selectedRoom })
      .then(() => {
        toast("Hotel reservado com sucesso!");
        setIsRoomChanged(true);
      })
      .catch(() => {
        toast("Erro ao salvar");
      });
  }

  return (
    <ContainerRooms>
      <Title>Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomOptions length={rooms.length}>
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
  display: ${(props) => (props.length >= 4 ? "grid" : "flex")};
  grid-template-columns: 25% 25% 25% 25%;
  padding: 30px 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin-top: 10px;
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
