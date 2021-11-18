import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Cardapio {
  async get(req, res) {

    const cardapio = await prisma.categoria.findMany({
      select: {
        id: true,
        sessaoName: true,
        secaoId: true,
        produtos: {
          select: {
            id: true,
            nome: true,
            descricao: true,
            foto: true,
            estoque: true,
            tamanho: true,
            quantidade: true,
            disponivel: true,
            preco: true
          },
        },
      },
    })

    const mock = [
      {
        id: "254be3fa-a2e0-4b7b-aa72-50a2d0670398",
        sessaoName: "Pizza Salgada",
        secaoId: "pizzasal",
        produtos: [
          {
            id: "254be3fa-a2e0-4b7b-aa72-50a2d0670398",
            nome: "Calabresa com Catupiry",
            descricao: "Pizza de calbresa com catupiry",
            foto: "/image/calabresa.jpg",
            estoque: true,
            tamanho: "grande",
            quantidade: 10,
            disponivel: true,
            preco: 40.0,
            categoriaId: "254be3fa-a2e0-4b7b-aa72-50a2d0670398",
          },
        ],
      },
    ];
    res.setHeader('Access-Control-Allow-Origin', process.env.CORS_URL)
    res.send(cardapio).json;
  }
}

module.exports = Cardapio;
