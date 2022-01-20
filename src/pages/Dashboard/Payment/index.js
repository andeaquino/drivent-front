import { styled, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import ErrorContainer from "../../../components/ErrorContainer/index";
import PaymentSection from "../../../components/PaymentSections/index.js";

import useApi from "../../../hooks/useApi";

export default function Payment() {
  const [presenceTypes, setPresenceTypes] = useState([]);
  const [chosenPresence, setChosenPresence ] = useState({});
  const [chosenHotelPlan, setChosenHotelPlan ] = useState({});
  const [hotelPlans, setHotelPlans] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const api = useApi();

  function getInfo() {
    api.payment.getPlansInfo().then(response => {
      setHotelPlans(response.data.hotelPlans);
      setPresenceTypes(response.data.presenceTypes);
    }).catch(error => {
      if (error.response) {
        setErrorMessage(error.response.data.message);
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
            <PaymentSection 
              types = {presenceTypes} 
              message={"Primeiro, escolha sua modalidade de ingresso"}
              chosen = {chosenPresence}
              setChosen = {setChosenPresence}
            />
            <PaymentSection 
              types = {hotelPlans} 
              message={"Ótimo! Agora escolha sua modalidade de hospedagem"}
              chosen = {chosenHotelPlan}
              setChosen = {setChosenHotelPlan}
            />
          </>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
