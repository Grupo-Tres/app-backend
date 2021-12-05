import express from 'express'
import Login from '../controller/login-controller'

const router = express.Router()

const loginCtrl = new Login()

router.post('/', loginCtrl.post)
router.put('/:id', loginCtrl.logout)

module.exports = router