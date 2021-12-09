import express from 'express'
import AddCarrinho from '../controller/addcarrinho-controller'

const router = express.Router()

const addcarrinhoCtrl = new AddCarrinho()

router.post('/', addcarrinhoCtrl.post)

module.exports = router