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
    if (!user) {
      return res.status(404).json({
        status_code: 404,
        message: "Usuário não encontrado",
      });
    } else {
      if (user.senha !== req.body.senha) {
        return res.status(401).json({
          status_code: 401,
          message: "Não autorizado",
        });
      } else {
        const token = autentication.getToken(user.id);
        return res.status(200).json({
          status_code: 200,
          token: token,
          user: user,
        });
      }
    }
  }

  async logout(req, res) {}
}

module.exports = Login;
