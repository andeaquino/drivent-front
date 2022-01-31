import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import HotelList from "./HotelList";
import ErrorContainer from "../ErrorContainer";
import styled from "styled-components";
import BookingInfos from "./BookingInfos";
import Loading from "../Dashboard/Loading";

export default function HotelInfo() {
  const [errorCode, setErrorCode] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);
  const [isChangingRoom, setIsChangingRoom] = useState(false);
  const [isRoomChanged, setIsRoomChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const { booking } = useApi();

  useEffect(() => {
    setLoading(true);
    booking
      .getBooking()
      .then((res) => {
        setHotelInfo(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setErrorCode(e.response.data);
        setLoading(false);
      });
    setIsRoomChanged(false);
    setIsChangingRoom(false);
  }, [isRoomChanged]);

  if (loading) {
    return <Loading />;
  }

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
