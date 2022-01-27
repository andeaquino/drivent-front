import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import HotelList from "./HotelList";
import ErrorContainer from "../ErrorContainer";
import styled from "styled-components";
import BookingInfos from "./BookingInfos";

export default function HotelInfo() {
  const [errorCode, setErrorCode] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);
  const [isChangingRoom, setIsChangingRoom] = useState(false);
  const [isRoomChanged, setIsRoomChanged] = useState(false);
  const { booking } = useApi();

  useEffect(() => {
    booking
      .getBooking()
      .then((res) => {
        setHotelInfo(res.data);
      })
      .catch((e) => {
        setErrorCode(e.response.data);
      });
    setIsRoomChanged(false);
    setIsChangingRoom(false);
  }, [isRoomChanged]);

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

      {!hotelInfo.bookingInfos || isChangingRoom ? (
        <HotelList
          list={hotelInfo.hotelsInfos}
          isChangingRoom={isChangingRoom}
          setIsRoomChanged={setIsRoomChanged}
        />
      ) : (
        <BookingInfos
          infos={hotelInfo.bookingInfos}
          setIsChangingRoom={setIsChangingRoom}
        />
      )}
    </>
  );
}

const PageTitle = styled.h1`
  font-size: 2em;
`;
