import { styled, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import ErrorContainer from "../../../components/ErrorContainer/index";
import PaymentSection from "../../../components/PaymentSections";

import useApi from "../../../hooks/useApi";

export default function Payment() {
  const [presenceTypes, setPresenceTypes] = useState([]);
  const [hotelPlans, setHotelPlans] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso");
  const api = useApi();

  function getInfo() {
    api.payment.getPlansInfo().then(response => {
      setHotelPlans(response.data.hotelPlans);
      setPresenceTypes(response.data.presenceTypes);
    }).catch(error => {
      if (error.response) {
        setErrorMessage("Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso");
      } else {
        setErrorMessage("Não foi possível conectar ao servidor!");
      }
    });
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {
        errorMessage ? 
          <ErrorContainer pageTitle = "Ingresso e pagamento" errorMessage = {errorMessage}/> 
          : 
          <>
            <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
            <PaymentSection types = {presenceTypes}/>
          </>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
