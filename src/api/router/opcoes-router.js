import express from 'express'
import Opcao from '../controller/opcoes-controller'

const router = express.Router()

const opcaoCtrl = new Opcao()

router.post('/', opcaoCtrl.post)
router.get('/:id', opcaoCtrl.get)
router.get('/', opcaoCtrl.getAll)
router.put('/:id', opcaoCtrl.put)
router.delete('/:id', opcaoCtrl.delete)

module.exports = router