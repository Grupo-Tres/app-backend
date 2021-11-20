import app from "../src/server";
import supertest from "supertest";

class RegistroTeste {
  rota = "";
  idRegistro = "";
  bodyIn = {};

  constructor(rota, bodyIn) {
    this.rota = rota;
    this.bodyIn = bodyIn;
  }

  async criaRegistro() {
    const respostaRegistro = await supertest(app)
      .post(this.rota)
      .send(this.bodyIn);
    this.idRegistro = respostaRegistro.body.registro.id;
    return respostaRegistro.body.registro.id;
  }

  async getIdRegistro() {
    return this.idRegistro;
  }

  async delRegistro() {
    await supertest(app).delete(this.rota + '/' + this.idRegistro);
  }
}

export default RegistroTeste;
