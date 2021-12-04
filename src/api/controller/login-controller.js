import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

class Login {
  async post(req, res, next) {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "Usuário não encontrado",
      });
    } else {
      if (user.senha !== req.body.senha) {
        return res.status(401).json({
          message: "Senha incorreta",
        });
      } else {
        return res.status(200).json({
          user: user,
        });
      }
    }
  }
}

module.exports = Login
