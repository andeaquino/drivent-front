import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ErrorContainer from "../../../components/ErrorContainer/index";
import PaymentSection from "../../../components/PaymentSections/index.js";
import Button from "../../../components/Form/Button";
import useApi from "../../../hooks/useApi";

export default function Payment() {
  const [ presenceTypes, setPresenceTypes] = useState([]);
  const [ chosenPresence, setChosenPresence ] = useState({});
  const [ chosenHotelPlan, setChosenHotelPlan ] = useState({});
  const [ hotelPlans, setHotelPlans] = useState([]);
  const [ errorMessage, setErrorMessage] = useState("");
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

  useEffect(() => {
    if(chosenPresence === presenceTypes[1]) {
      setChosenHotelPlan(hotelPlans[0]);
    }
  }, [chosenPresence]);

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
            {
              chosenPresence.name === "Presencial" ? 
                <PaymentSection 
                  types = {hotelPlans} 
                  message={"Ótimo! Agora escolha sua modalidade de hospedagem"}
                  chosen = {chosenHotelPlan}
                  setChosen = {setChosenHotelPlan}
                /> : ""
            }
            {
              ((chosenPresence.id && chosenHotelPlan.id) || (chosenPresence === presenceTypes[1])) ? 
                <>
                  <SummaryMessage>
                    Fechado! O total ficou em <span> R$ {(chosenPresence.price + chosenHotelPlan.price) || 0}</span>. Agora é só confirmar:
                  </SummaryMessage>
                  <Button>
                    Reservar Ingresso
                  </Button>
                </> : ""
            }
          </>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const SummaryMessage = styled.p`
    font-family: Roboto;
    margin: 44px 0px 17px 0px;
    font-size: 20px;
    font-weight: 400;
    color: #8E8E8E;

    span {
        font-weight: bold;
    }
`;
