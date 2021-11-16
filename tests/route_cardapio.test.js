import app from "../src/server";
import supertest from "supertest";
import { bodyInCategoria, bodyOutCardapio, bodyInProduto } from "./jsonMock";
import RegistroTeste from "./RegistroTeste";

describe("Testa as rotas do endpoint /cardapio", () => {
  let idCategoriaTeste = "";
  let idProdutoTeste = "";

  const registroCategoria = new RegistroTeste(
    "/api/v1/categoria/",
    bodyInCategoria
  );
  const registroProduto = new RegistroTeste("/api/v1/produto/", bodyInProduto);

  test("Cria registro de produto e categoria", async () => {
    idCategoriaTeste = await registroCategoria.criaRegistro();
    bodyInProduto.categoriaId = idCategoriaTeste;
    idProdutoTeste = await registroProduto.criaRegistro();
  });

  test("O retorno do método GET será um array de objetos", async () => {
    const response = await supertest(app).get("/api/v1/cardapio");
    expect(response.body).toContainEqual(bodyOutCardapio);
    await registroProduto.delRegistro();
    await registroCategoria.delRegistro();
  });
});
