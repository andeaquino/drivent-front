import styled from "styled-components";
import Rooms from "./Rooms";

export default function Hotel() {
  return (
    <ContainerHotel>
      <div>
        <p>hotel </p>
        <p>hotel </p>
        <p>hotel </p>
      </div>
      <Rooms />
    </ContainerHotel>
  );
}

const ContainerHotel = styled.div``;
