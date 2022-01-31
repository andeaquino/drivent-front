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

  postActivities(id) {
    return api.post(`/activities/${id}`, {}, {
      headers: {
        ...this.getAuthorizationHeader(),
      }, 
    });
  }
}
