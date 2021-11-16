import supertest from "supertest"
import app from "../src/server"
import RegistroTeste from "./RegistroTeste"
import { bodyInCategoria, bodyInProduto, bodyOutProduto } from "./jsonMock"

describe("Testa as rotas da tabela Produto", () => {
  let idTest = "";
  let idCategoriaTeste = "";
  const registroCategoria = new RegistroTeste(
    "/api/v1/categoria/",
    bodyInCategoria
  );

  test("Cria registro", async () => {
    idCategoriaTeste = await registroCategoria.criaRegistro();
    bodyInProduto.categoriaId = idCategoriaTeste;
    bodyOutProduto.registro.categoriaId = idCategoriaTeste;
    console.log("Categoria Teste: ", idCategoriaTeste);
  });

  test("retorno do método POST será um objeto semelhante a bodyOut", async () => {
    const response = await supertest(app)
      .post("/api/v1/produto")
      .send(bodyInProduto);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(bodyOutProduto);
    idTest = response.body.registro.id;
  });

  test("retorno do método GET será um array de objetos", async () => {
    const response = await supertest(app).get("/api/v1/produto");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toContainEqual(bodyOutProduto.registro);
  });

  test("restorno de GET com id será um objeto", async () => {
    console.log("idTest: ", idTest);
    const response = await supertest(app).get("/api/v1/produto/" + idTest);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(bodyOutProduto.registro);
  });

  test("retorno do método PUT será um objeto", async () => {
    const response = await supertest(app)
      .put("/api/v1/produto/" + idTest)
      .send({
        estoque: false,
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        estoque: false,
      })
    );
  });

  test("retorno do delete será um objeto", async () => {
    const response = await supertest(app).delete("/api/v1/produto/" + idTest);
    expect(response.body).toMatchObject({
      delete: idTest,
    });
    await registroCategoria.delRegistro();
  });
});
