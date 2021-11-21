import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient()

class Opcoes {
    async post (req, res) {
        const createOpcoes = await prisma.opcoes.create({ data: req.body })
        const resposta = {
            status: "ok",
            registro: createOpcoes
        }
        res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
        res.send(resposta);
    }

    async get(req, res) {
        const opcao = await prisma.opcoes.findUnique({
          where: {
            id: req.params.id,
          },
        });
        res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
        res.send(opcao).json;
    }

    async getAll(req, res) {
        const opcoes = await prisma.opcoes.findMany();
        res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
        res.send(opcoes).json;
    }

    async put(req, res) {
        const opcao = await prisma.opcoes.update({
          where: {
            id: req.params.id,
          },
          data: req.body,
        });
        res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
        res.send(opcao);
      }
    
    async delete(req, res) {
        const opcoes = await prisma.opcoes.delete({
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

export default Opcoes