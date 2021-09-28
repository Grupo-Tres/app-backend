import express from 'express'
import userController from '../controller/user-controller'

const router = express.Router()

const userCtrl = new userController()

router.post('/', userCtrl.post)

module.exports = router