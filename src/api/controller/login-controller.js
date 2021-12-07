import { PrismaClient } from "prisma/prisma-client";
import Autentication from "../../model/Autentication";

const prisma = new PrismaClient();
const autentication = new Autentication();

class Login {
  async post(req, res, next) {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    let resposta = {};
    if (!user) {
      resposta = {
        status_code: 404,
        message: "Usuário não encontrado",
      };
    } else {
      if (user.senha !== req.body.senha) {
        resposta = {
          status_code: 401,
          message: "Não autorizado",
        };
      } else {
        const token = autentication.getToken(user.id);
        resposta = {
          status_code: 200,
          message: "Autorizado",
          token: token,
          user: user,
        };
      }
    }
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
    return res.status(resposta.status_code).send(resposta);
  }

  async logout(req, res) {}
}

module.exports = Login;
