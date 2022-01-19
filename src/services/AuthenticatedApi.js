import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default class AuthenticatedApi {
  constructor() {
    const context = useContext(UserContext);
    const userData = context?.userData;
    this.token = userData?.token;
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.token}`
    };
  }
}
