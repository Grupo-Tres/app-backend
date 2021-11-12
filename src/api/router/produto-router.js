import express from 'express'
import Produto from '../controller/produto-controller'

const router = express.Router()

const produtoCtrl = new Produto()

router.post('/', produtoCtrl.post)
router.get('/:id', produtoCtrl.get)
router.get('/', produtoCtrl.getAll)
router.put('/:id', produtoCtrl.put)
router.delete('/:id', produtoCtrl.delete)

module.exports = router