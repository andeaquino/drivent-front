import { useEffect, useState } from "react";
import PlanSelection from "./PlanSelection";
import PaymentInfo from "./PaymentInfo";
import PaymentConfirmed from "./PaymentConfirmed";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";

export default function Payment() {
  const [chosenPresence, setChosenPresence] = useState({});
  const [chosenHotelPlan, setChosenHotelPlan] = useState({});
  const [isTicketSelected, setIsTicketSelected] = useState(false);
  const [ticket, setTicket] = useState({});
  const api = useApi();

  function getTicket() {
    api.payment
      .getUserTicket()
      .then((response) => {
        setTicket({
          presence: response.data.presenceType,
          hotel: response.data.hotelPlan,
        });
      })
      .catch((error) => {
        if (!error.response) {
          toast("Não foi possível conectar ao servidor!");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }

  useEffect(() => {
    getTicket();
  }, []);

  return ticket.presence ? (
    <PaymentConfirmed ticket={ticket} />
  ) : isTicketSelected ? (
    <PaymentInfo
      ticket={{ presence: chosenPresence, hotel: chosenHotelPlan }}
      getTicket={getTicket}
    />
  ) : (
    <PlanSelection
      chosenHotelPlan={chosenHotelPlan}
      chosenPresence={chosenPresence}
      setChosenHotelPlan={setChosenHotelPlan}
      setChosenPresence={setChosenPresence}
      setIsTicketSelected={setIsTicketSelected}
    />
  );
}
