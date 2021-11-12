import supertest from "supertest";
import app from "../src/server";

describe("Testa as rotas da tabela Produto", () => {
  let idTest = "";
  let categoriaTeste = "";
  let bodyIn = {};
  let bodyOut = {};

  test("Cria uma categoria do produto e retorna um id", async () => {
    const bodyCategoria = {
      sessaoName: "Pizza Salgada",
      secaoId: "pizzasal",
    };
    const respostaCategoria = await supertest(app)
      .post("/api/v1/categoria")
      .send(bodyCategoria);
    categoriaTeste = respostaCategoria.body.registro.id;
    expect(respostaCategoria.body.registro.secaoId).toBe(bodyCategoria.secaoId);

    console.log("Categoria de Teste:", categoriaTeste);
    bodyIn = {
      nome: "Calabresa com Catupiry",
      descricao: "Pizza de calbresa com catupiry",
      foto: "/image/calabresa.jpg",
      estoque: true,
      tamanho: "grande",
      quantidade: 10,
      disponivel: true,
      preco: 40.0,
      categoriaId: categoriaTeste,
    };

    bodyOut = {
      status: "ok",
      registro: {
        id: expect.stringMatching(
          /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
        ),
        nome: "Calabresa com Catupiry",
        descricao: "Pizza de calbresa com catupiry",
        foto: "/image/calabresa.jpg",
        estoque: true,
        tamanho: "grande",
        quantidade: 10,
        disponivel: true,
        preco: 40.0,
        categoriaId: categoriaTeste,
        createdAt: expect.stringMatching(
          /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
        ),
        updatedAt: expect.stringMatching(
          /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
        ),
      },
    };
  });

  test("retorno do método POST será um objeto semelhante a bodyOut", async () => {
    const response = await supertest(app).post("/api/v1/produto").send(bodyIn);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(bodyOut);
    idTest = response.body.registro.id;
  });

  test("retorno do método GET será um array de objetos", async () => {
    const response = await supertest(app).get("/api/v1/produto");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toContainEqual(bodyOut.registro);
  });

  test("restorno de GET com id será um objeto", async () => {
    console.log("idTest: ", idTest);
    const response = await supertest(app).get("/api/v1/produto/" + idTest);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(bodyOut.registro);
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
    await supertest(app).delete("/api/v1/categoria/" + categoriaTeste);
  });
});
