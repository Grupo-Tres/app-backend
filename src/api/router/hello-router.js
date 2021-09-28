import express from 'express'
import Hello from '../controller/hello-controller'

const router = express.Router()

const helloCtrl = new Hello()

router.get('/', helloCtrl.get)

module.exports = router