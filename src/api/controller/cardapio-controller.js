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
            quantidade: true,
            disponivel: true
          },
        },
      },
    });

    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(cardapio).json;
  }
}

module.exports = Cardapio;
