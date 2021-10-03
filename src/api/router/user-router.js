import express from 'express'
import userController from '../controller/user-controller'

const router = express.Router()

const userCtrl = new userController()

router.post('/', userCtrl.post)
router.get('/', userCtrl.get)
router.get('/:id', userCtrl.getAll)

module.exports = router