import React, { useEffect, useState } from "react";
import HandleError from "./HandleError";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import HotelList from "./HotelList";

export default function HotelInfo() {
  const [errorCode, setErrorCode] = useState(null);
  const [hotelInfo, setHotelInfo] = useState([]);
  const { booking } = useApi();
  useEffect(() => {
    booking
      .getBooking()
      .then((res) => {
        setHotelInfo(res.data);
      })
      .catch((e) => {
        setErrorCode(e.response.status);
      });
  }, []);
  return (
    <>
      <PageTitle>Escolha de hotel e quarto</PageTitle>
      {!errorCode ? <HotelList list={hotelInfo} /> : <HandleError error={errorCode} />}
    </>
  );
}

const PageTitle = styled.h1`
  font-size: 2em;
`;
