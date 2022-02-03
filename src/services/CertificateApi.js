import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class CertificateApi extends AuthenticatedApi {
  getCertificate() {
    return api.get("/certificate", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
