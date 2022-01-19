import api from "./externalApi";

export default class CepApi {
  getAddress(cep) {
    return api.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
