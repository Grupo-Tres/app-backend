import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Pedido {
  async post(req, res) {
    const createPedido = await prisma.pedido.create({ data: req.body });
    const resposta = {
      status: "ok",
      registro: createPedido,
    };
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(resposta);
  }

  async get(req, res) {
    const pedido = await prisma.pedido.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(pedido).json;
  }

  async getAll(req, res) {
    const pedido = await prisma.pedido.findMany();
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(pedido).json;
  }

  async put(req, res) {
    const pedido = await prisma.pedido.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(pedido);
  }

  async delete(req, res) {
    const pedido = await prisma.pedido.delete({
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

module.exports = Pedido;
