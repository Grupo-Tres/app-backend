import express from 'express'
import Pedido from '../controller/pedido-controller'

const router = express.Router()

const pedidoCtrl = new Pedido()

router.post('/', pedidoCtrl.post)
router.get('/:id', pedidoCtrl.get)
router.get('/', pedidoCtrl.getAll)
router.put('/:id', pedidoCtrl.put)
router.delete('/:id', pedidoCtrl.delete)

module.exports = router