import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import HotelList from "./HotelList";
import ErrorContainer from "../ErrorContainer";

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
        setErrorCode(e.response);
      });
  }, []);
  return (
    <>
      {!errorCode ? (
        hotelInfo?.id === undefined ? (
          <HotelList list={hotelInfo} />
        ) : (
          <span> Em breve mostraremos seu hotel</span>
        )
      ) : (
        <ErrorContainer
          pageTitle="Escolha de hotel e quarto"
          errorMessage={errorCode}
        />
      )}
    </>
  );
}
