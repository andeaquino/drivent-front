import styled from "styled-components";
import { BsPersonFill, BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ItemRoom({ room }) {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (room.totalVacancies === room.availableVacancies) setIsAvailable(false);
  }, []);

  function PersonIcons() {
    let items = [];
    let aux = room.availableVacancies;
    for (let i = 0; i < room.totalVacancies; i++) {
      if (aux > 0) {
        items.push(<BsPersonFill />);
      } else {
        items.push(<BsPerson />);
      }
      aux--;
    }
    return items.map((item) => item);
  }

  return (
    <ContainerRoom>
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
  padding: 12px;
  font-weight: bold;
  font-size: 20px;
  width: 190px;
  height:: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  color: #454545;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
