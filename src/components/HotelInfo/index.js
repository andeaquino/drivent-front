import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import HotelList from "./HotelList";
import ErrorContainer from "../ErrorContainer";
import styled from "styled-components";
import BookingInfos from "./BookingInfos";

export default function HotelInfo() {
  const [errorCode, setErrorCode] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);
  const { booking } = useApi();
  useEffect(() => {
    booking
      .getBooking()
      .then((res) => {
        setHotelInfo(res.data);
      })
      .catch((e) => {
        setErrorCode(e.response);
      });
  }, []);

  useEffect(() => {}, [hotelInfo]);

  if (errorCode) {
    return (
      <ErrorContainer
        pageTitle="Escolha de hotel e quarto"
        errorMessage={errorCode}
      />
    );
  }

  if (!hotelInfo) return <p></p>;

  return (
    <>
      <PageTitle>Escolha de hotel e quarto</PageTitle>

      {!hotelInfo.bookingInfos ? (
        <HotelList list={hotelInfo.hotelsInfos} />
      ) : (
        <BookingInfos infos={hotelInfo.bookingInfos} />
      )}
    </>
  );
}

const PageTitle = styled.h1`
  font-size: 2em;
`;
