import app from "../src/server";
import supertest from "supertest";

class RegistroTeste {
  rota = "";
  idCategoria = "";
  bodyIn = {};

  constructor(rota, bodyIn) {
    this.rota = rota;
    this.bodyIn = bodyIn;
  }

  async criaRegistro() {
    const respostaCategoria = await supertest(app)
      .post(this.rota)
      .send(this.bodyIn);
    this.idCategoria = respostaCategoria.body.registro.id;
    return respostaCategoria.body.registro.id;
  }

  async getIdCategoria() {
    return this.idCategoria;
  }

  async delCategoria() {
    await supertest(app).delete(this.rota + this.idCategoria);
  }
}

export default RegistroTeste;
