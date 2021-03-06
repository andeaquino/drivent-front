import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import BookingApi from "../services/BookingApi";
import PaymentApi from "../services/PaymentApi";
import ActivitiesApi from "../services/ActivitiesApi";
import CertificateApi from "../services/CertificateApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    booking: new BookingApi(),
    payment: new PaymentApi(),
    activities: new ActivitiesApi(),
    certificate: new CertificateApi(),
  };
}
