import api from "./api";

export default class Auth {
  signIn(email, password) {
    return api.post("/auth/sign-in", { email, password });
  }
}
