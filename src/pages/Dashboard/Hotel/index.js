import styled from "styled-components";
import Rooms from "./Rooms";

export default function Hotel() {
  const rooms = [
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
    <ContainerHotel>
      <div>
        <p>hotel </p>
        <p>hotel </p>
        <p>hotel </p>
      </div>
      <Rooms rooms={rooms} />
    </ContainerHotel>
  );
}

const ContainerHotel = styled.div``;
