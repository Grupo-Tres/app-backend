import express from 'express'
import User  from '../controller/user-controller'

const router = express.Router()

const userCtrl = new User()

router.post('/', userCtrl.post)
router.get('/:id', userCtrl.get)
router.get('/', userCtrl.getAll)
router.put('/:id', userCtrl.put)
router.delete('/:id', userCtrl.delete)

module.exports = router