import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Payment() {
  const [presenceTypes, setPresenceTypes] = useState([]);
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

  return "Pagamento: Em breve!";
}
