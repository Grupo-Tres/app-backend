import supertest from "supertest";
import app from "../src/server";
import RegistroTeste from "./RegistroTeste";
import {
  bodyInCategoria,
  bodyInProduto,
  bodyInOpcoes,
  bodyOutOpcoes,
} from "./jsonMock";

describe("Testa as rotas da tabela opcoes", () => {
  let idTest = "";
  //bodyInProduto.categoriaId = '16345e18-a5a3-425f-bdc6-d5db996d91f8'
  const RegistroCategoria = new RegistroTeste(
    "/api/v1/categoria",
    bodyInCategoria
  );
  const RegistroProduto = new RegistroTeste("/api/v1/produto/", bodyInProduto);

  test("Cria registro de categoria e produto", async () => {
    const idCategoriaTeste = await RegistroCategoria.criaRegistro();
    bodyInProduto.categoriaId = idCategoriaTeste;
    const idProdutoTeste = await RegistroProduto.criaRegistro();
    bodyInOpcoes.produtoId = idProdutoTeste;
    //console.log('ProdutoId Teste: ', idProdutoTeste)
    //console.log('Categoria Teste: ', idCategoriaTeste)
    //console.log('Opcoes: ', bodyInOpcoes)
  });

  test("Retorno do POST será um objeto do tipo bodyOutOpcoes", async () => {
    const response = await supertest(app)
      .post("/api/v1/opcoes")
      .send(bodyInOpcoes);
    expect(response.body).toEqual(bodyOutOpcoes);
    idTest = response.body.registro.id;
  });

  test("Retorno do GET será um array de objetos", async () => {
    const response = await supertest(app).get("/api/v1/opcoes");
    expect(response.body).toContainEqual(bodyOutOpcoes.registro);
  });

  test("restorno de GET com id será um objeto", async () => {
    const response = await supertest(app).get("/api/v1/opcoes/" + idTest);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(bodyOutOpcoes.registro);
  });

  test("retorno do método PUT será um objeto", async () => {
    const response = await supertest(app)
      .put("/api/v1/opcoes/" + idTest)
      .send({
        preco: 50.0,
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        preco: 50.0,
      })
    );
  });

  test("retorno do delete será um objeto", async () => {
    const response = await supertest(app).delete("/api/v1/opcoes/" + idTest);
    expect(response.body).toMatchObject({
      delete: idTest,
    });
  });

  test("Deleta registros de teste", async () => {
    await RegistroProduto.delRegistro();
    await RegistroCategoria.delRegistro();
  });
});
