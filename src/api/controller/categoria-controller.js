import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Categoria {
  async post(req, res) {
    const creatcategoria = await prisma.categoria.create({ data: req.body });
    const resposta = {
      status: "ok",
      registro: creatcategoria,
    };
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(resposta);
  }

  async get(req, res) {
    const categoria = await prisma.categoria.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(categoria).json;
  }

  async getAll(req, res) {
    const usuarios = await prisma.categoria.findMany();
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(usuarios).json;
  }

  async put(req, res) {
    const usuario = await prisma.categoria.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(usuario);
  }

  async delete(req, res) {
    const usuario = await prisma.categoria.delete({
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

module.exports = Categoria;
