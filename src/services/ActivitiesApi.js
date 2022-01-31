import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivitiesApi extends AuthenticatedApi {
  getActivities() {
    return api.get("/activities", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
