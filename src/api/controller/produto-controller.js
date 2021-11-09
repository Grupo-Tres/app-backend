import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Produto {
  async post(req, res) {
    const creatproduto = await prisma.produto.create({ data: req.body });
    resposta = {
      status: "ok",
      registro: creatproduto,
    };

    res.send(resposta);
  }

  async get(req, res) {
    const produto = await prisma.produto.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.send(produto).json;
  }

  async getAll(req, res) {
    const usuarios = await prisma.produto.findMany();
    res.send(usuarios).json;
  }

  async put(req, res) {
    const usuario = await prisma.produto.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.send(usuario);
  }

  async delete(req, res) {
    const usuario = await prisma.produto.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      delete: req.params.id,
    });
  }
}

module.exports = Produto;
