import api from "./api";

export default class EventApi {
  getEventInfo() {
    return api.get("/event");
  }
}
