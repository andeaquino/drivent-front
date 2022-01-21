import { useState } from "react";
import PlanSelection from "./PlanSelection";
import PaymentInfo from "./PaymentInfo";
import PaymentConfirmed from "./PaymentConfirmed";

export default function Payment() {
  const [ chosenPresence, setChosenPresence ] = useState({});
  const [ chosenHotelPlan, setChosenHotelPlan ] = useState({});
  const [isTicketSelected, setIsTicketSelected] = useState(false);

  const ticket = {};
    
  return ticket ? (
    <PaymentConfirmed
      ticket={{ presence: chosenPresence, hotel: chosenHotelPlan }}
    />
  ) : isTicketSelected ? (
    <PaymentInfo
      ticket={{ presence: chosenPresence, hotel: chosenHotelPlan }}
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
};
