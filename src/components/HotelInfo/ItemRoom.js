import styled from "styled-components";
import { BsPersonFill, BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ItemRoom({ room, selectedRoom, setSelectedRoom }) {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (room.vacancies === room.occupied) setIsAvailable(false);
  }, []);

  function PersonIcons() {
    let items = [];
    let aux = room.occupied;
    let useSelected = false;
    for (let i = 0; i < room.vacancies; i++) {
      if (aux > 0) {
        items.push(<BsPersonFill size={25} key={i + 1} />);
      } else {
        if (selectedRoom === room.id && !useSelected) {
          items.push(<BsPersonFill size={25} color="#FF4791" key={i + 1} />);
          useSelected = true;
        } else {
          items.push(<BsPerson size={25} key={i + 1} />);
        }
      }
      aux--;
    }
    return items.map((item) => item);
  }

  function selectRoom() {
    if (!isAvailable) return;
    setSelectedRoom(room.id);
  }

  return (
    <ContainerRoom
      isAvailable={isAvailable}
      onClick={selectRoom}
      isSelected={selectedRoom === room.id}
    >
      <span>{room.name}</span>
      <Icons>
        <PersonIcons />
      </Icons>
    </ContainerRoom>
  );
}

const ContainerRoom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  margin-right: 17px;
  font-weight: bold;
  font-size: 20px;
  width: 190px;
  height:: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  color: ${(props) => (props.isAvailable ? "#454545" : "#8C8C8C")};
  background-color: ${(props) => {
    if (props.isSelected) return "#FFEED2";
    if (!props.isAvailable) return "#E9E9E9";
    return "white";
  }};
  user-select: none;
  cursor: ${(props) => (props.isAvailable ? "pointer" : "not-allowed")}
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
