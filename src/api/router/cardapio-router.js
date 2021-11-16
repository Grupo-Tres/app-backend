import express from 'express'
import Cardapio from '../controller/cardapio-controller'

const router = express.Router()

const cardapioCtrl = new Cardapio()

router.get('/', cardapioCtrl.get)

module.exports = router