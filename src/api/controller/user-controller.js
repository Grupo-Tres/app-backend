import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
class User {
  async post(req, res) {
    const user = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });
    let resposta = {};
    if (user.length == 0) {
      const creatUser = await prisma.user.create({ data: req.body });
      resposta = {
        status: "ok",
        registro: creatUser,
      };
    } else {
      resposta = {
        status: "error",
        msg: "O usuário já está cadastrado no sistema",
      };
    }
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(resposta);
  }

  async get(req, res) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(user).json;
  }

  async getAll(req, res) {
    const usuarios = await prisma.user.findMany();
    res.send(usuarios).json;
  }

  async put(req, res) {
    const usuario = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.send(usuario);
  }

  async delete(req, res) {
    const usuario = await prisma.user.delete({
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

module.exports = User;
