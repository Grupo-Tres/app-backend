import { PrismaClient } from "prisma/prisma-client";
import Autentication from "../../model/Autentication";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const autentication = new Autentication();

class AddCarrinho {
    async post(req, res) {
        //const token = req.headers["x-access-token"];
        const token = req.body.token
        const decode = jwt.decode(token)
        console.log("Pedido: ", req.body.idPedido)
        if (req.body.idPedido != undefined) {

            const pedido = await prisma.pedido.findUnique({
                where: { id: req.body.idPedido[0].id }
            })

            const carrinho = await prisma.carrinho.create({
                data: { 
                    pedidoId: req.body.idPedido[0].id,
                    produtoId: req.body.produtoId,
                    nome: req.body.nome,
                    opcao: req.body.opcao,
                    quantidade: req.body.quantidade,
                    preco: req.body.preco
                 }
            })

            const listaCarrinho = await prisma.carrinho.findMany({
                where: { pedidoId: req.body.idPedido[0].id }
            })

            const resposta = {
                status: "ok",
                pedido: pedido,
                carrinho: listaCarrinho
            }

            res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
            return res.status(200).send(resposta);
        } else {
            const pedido = await prisma.pedido.create({
                data: { userId: decode.id }
            })

            const carrinho = await prisma.carrinho.create({
                data: { 
                    pedidoId: pedido.id,
                    produtoId: req.body.produtoId,
                    nome: req.body.nome,
                    opcao: req.body.opcao,
                    quantidade: req.body.quantidade,
                    preco: req.body.preco
                 }
            })


            const resposta = {
                status: "ok",
                pedido: pedido,
                carrinho: [carrinho]
            }

            res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
            return res.status(200).send(resposta)
        }

        
        
    }
} 

module.exports = AddCarrinho;