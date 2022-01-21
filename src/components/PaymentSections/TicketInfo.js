import styled from "styled-components";

export default function TicketInfo({ ticket }) {
  return (
    <Container>
      <h2>Ingresso Escolhido</h2>
      <div>
        <p>{ticket.presence.name === "Online" ? "Online" : `${ticket.presence.name} + ${ticket.hotel.name}`}</p>
        <p>R$ {ticket.presence.price + ticket.hotel.price}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 20px;
  }

  div {
    width: 290px;
    height: 108px;
    background-color: #ffeed2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 16px;
      color: #454545;
    }

    p:last-child {
      font-size: 14px;
      color: #898989;
      margin-top: 10px;
    }
  }
`;
