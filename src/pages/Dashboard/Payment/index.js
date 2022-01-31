import { useEffect, useState } from "react";
import PlanSelection from "./PlanSelection";
import PaymentInfo from "./PaymentInfo";
import PaymentConfirmed from "./PaymentConfirmed";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";
import Loading from "../../../components/Dashboard/Loading";

export default function Payment() {
  const [chosenPresence, setChosenPresence] = useState({});
  const [chosenHotelPlan, setChosenHotelPlan] = useState({});
  const [isTicketSelected, setIsTicketSelected] = useState(false);
  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const api = useApi();

  function getTicket() {
    setLoading(true);

    api.payment
      .getUserTicket()
      .then((response) => {
        setTicket({
          presence: response.data.presenceType,
          hotel: response.data.hotelPlan,
        });
        setLoading(false);
      })
      .catch((error) => {
        if (!error.response) {
          toast("Não foi possível conectar ao servidor!");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getTicket();
  }, []);

  return loading ? <Loading /> : ticket.presence ? (
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
