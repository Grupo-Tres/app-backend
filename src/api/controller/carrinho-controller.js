import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Carrinho {
  async post(req, res) {
    const createCarrinho = await prisma.carrinho.create({ data: req.body });
    const resposta = {
      status: "ok",
      registro: createCarrinho,
    };
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(resposta);
  }

  async get(req, res) {
    const carrinho = await prisma.carrinho.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(carrinho).json;
  }

  async getAll(req, res) {
    const carrinho = await prisma.carrinho.findMany();
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(carrinho).json;
  }

  async put(req, res) {
    const carrinho = await prisma.carrinho.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(carrinho);
  }

  async delete(req, res) {
    const carrinho = await prisma.carrinho.delete({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send({
      delete: req.params.id,
    });
  }
}

module.exports = Carrinho;
