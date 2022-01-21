import { useState } from "react";
import PlanSelection from "./PlanSelection";

export default function Payment() {
  const [ chosenPresence, setChosenPresence ] = useState({});
  const [chosenHotelPlan, setChosenHotelPlan] = useState({});
    
  return (
    <PlanSelection
      chosenHotelPlan = {chosenHotelPlan}
      chosenPresence = {chosenPresence}
      setChosenHotelPlan = {setChosenHotelPlan}
      setChosenPresence = {setChosenPresence}
    />
  );
};
