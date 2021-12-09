import express from 'express'
import Carrinho from '../controller/carrinho-controller'

const router = express.Router()

const CarrinhoCtrl = new Carrinho()

router.post('/', CarrinhoCtrl.post)
router.get('/:id', CarrinhoCtrl.get)
router.get('/', CarrinhoCtrl.getAll)
router.put('/:id', CarrinhoCtrl.put)
router.delete('/:id', CarrinhoCtrl.delete)

module.exports = router