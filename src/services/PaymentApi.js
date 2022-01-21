import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class PaymentApi extends AuthenticatedApi {
  getPlansInfo() {
    return api.get("/payment/plans", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  buyTicket(body) {
    return api.post("/payment/ticket", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
};
