import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class BookingApi extends AuthenticatedApi {
  getBooking() {
    return api.get("/booking", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  postBooking({ userId, roomId }) {
    return api.post(
      "/booking",
      { userId, roomId },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
