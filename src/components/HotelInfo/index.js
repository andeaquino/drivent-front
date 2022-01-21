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
        setErrorCode(e.response.data);
      });
  }, []);

  return (
    <>
      {!errorCode ? (
        <HotelList list={hotelInfo} />
      ) : (
        <ErrorContainer
          pageTitle="Escolha de hotel e quarto"
          errorMessage={errorCode}
        />
      )}
    </>
  );
}
