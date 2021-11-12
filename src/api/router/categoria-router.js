import express from 'express'
import Categoria from '../controller/categoria-controller'

const router = express.Router()

const categoriaCtrl = new Categoria()

router.post('/', categoriaCtrl.post)
router.get('/:id', categoriaCtrl.get)
router.get('/', categoriaCtrl.getAll)
router.put('/:id', categoriaCtrl.put)
router.delete('/:id', categoriaCtrl.delete)

module.exports = router