import { Typography } from "@material-ui/core";
import styled from "styled-components";
import TicketInfo from "../../../components/PaymentSections/TicketInfo";
import { AiFillCheckCircle } from "react-icons/ai";

export default function PaymentConfirmed({ ticket }) {
  return (
    <Container>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <TicketInfo ticket={ticket} />
      <h2>Pagamento</h2>
      <CheckContainer>
        <CheckCircle />
        <p>Pagamento Confirmado!</p>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </CheckContainer>
    </Container>
  );
}

const Container = styled.div`
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #8e8e8e;
    margin: 25px 0 20px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const CheckContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #454545;
  font-weight: 700;

  p:first {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
  }

  p:last-child {
    grid-column-start: 1;
    font-weight: 400;
  }
`;

const CheckCircle = styled(AiFillCheckCircle)`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-end: 1;
  color: #36b853;
  font-size: 40px;
  margin-right: 20px;
`;
