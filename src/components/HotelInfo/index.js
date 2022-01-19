import React, { useEffect, useState } from "react";
import HandleError from "./HandleError";
import styled from "styled-components";
import useApi from "../../hooks/useApi";

export default function HotelInfo() {
  const [errorCode, setErrorCode] = useState(null);
  const { booking } = useApi();
  useEffect(() => {
    booking
      .getBooking()
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        setErrorCode(e.response.status);
      });
  }, []);
  return (
    <>
      <PageTitle>Escolha de hotel e quarto</PageTitle>
      {!errorCode ? <div>tudo certo</div> : <HandleError error={errorCode} />}
    </>
  );
}

const PageTitle = styled.h1`
  font-size: 2em;
`;
