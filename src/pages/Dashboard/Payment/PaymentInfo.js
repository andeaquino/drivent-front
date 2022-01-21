import { Typography } from "@material-ui/core";
import styled from "styled-components";
import TicketInfo from "../../../components/PaymentSections/TicketInfo";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Button from "../../../components/Form/Button";
import { toast } from "react-toastify";
import useApi from "../../../hooks/useApi";

export default function PaymentInfo({ ticket }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const api = useApi();

  function makePayement(e) {
    e.preventDefault();
    const pattern =
      "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$";

    if (!number.match(pattern)) {
      toast("Insira um número de cartão válido E.g.: 49..., 51..., 36..., 37...");
      return;
    }

    if (name === "") {
      toast("Campo do nome não pode ser vazio");
      return;
    }
    
    if (!expiry.match("^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$")) {
      toast("Insira uma data de validade válida");
      return;
    }

    if (!cvc.match("^[0-9]{3,4}$")) {
      toast("Insira um cvc válido");
      return;
    }

    const body = {
      hotelPlan: ticket.hotel.id,
      presenceType: ticket.presence.id
    };

    api.payment
      .buyTicket(body)
      .then(() => {
        toast("Ingresso comprado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          toast(error.response.data.message);
        } else {
          toast("Não foi possível conectar ao servidor!");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }

  return (
    <Container>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <TicketInfo ticket={ticket} />
      <h2>Pagamento</h2>
      <CreditCardContainer>
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} />
        <form>
          <input
            placeholder="Card Number"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Valid Thru"
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            placeholder="CVC"
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </form>
      </CreditCardContainer>
      <Button onClick={makePayement}>Finalizar Pagamento</Button>
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

const CreditCardContainer = styled.div`
  display: flex;
  width: 600px;
  margin-bottom: 40px;

  form {
    height: 180px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;

    input {
      width: 365px;
      height: 48px;
      background: #ffffff;
      border-radius: 10px;
      border: 2px solid #dddddd;
      font-size: 20px;
      color: #9f9f9f;
      padding-left: 17px;
      background-color: ${({ loading }) => (loading ? "#F2F2F2" : "#FFFFFF")};
      pointer-events: ${({ loading }) => (loading ? "none" : "all")};
      margin-bottom: 5px;
      margin-right: 5px;
    }

    input:focus {
      outline: none;
    }

    input:nth-child(4),
    input:nth-child(3) {
      width: 180px;
    }
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
