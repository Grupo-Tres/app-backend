import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Produto {
  async post(req, res) {
    const creatproduto = await prisma.produto.create({ data: req.body });
    const resposta = {
      status: "ok",
      registro: creatproduto,
    };
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(resposta);
  }

  async get(req, res) {
    const produto = await prisma.produto.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(produto).json;
  }

  async getAll(req, res) {
    const usuarios = await prisma.produto.findMany();
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(usuarios).json;
  }

  async put(req, res) {
    const usuario = await prisma.produto.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(usuario);
  }

  async delete(req, res) {
    const usuario = await prisma.produto.delete({
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

module.exports = Produto;
