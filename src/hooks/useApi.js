import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import PaymentApi from "../services/PaymentApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    payment: new PaymentApi(),
  };
}
