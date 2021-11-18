import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.put('/change-password/:id', controllers.changePassword)
router.delete('/users/:id', controllers.deleteUser)
router.get('/users', controllers.getUsers)
router.put('/update/:id', controllers.updateUser)
router.get('/users/:id', controllers.getUser)
router.put('/update-cart/:id', controllers.updateCartQuantity)
router.post('/add-to-cart/:id', controllers.addToCart)
router.put('/remove-from-cart/:id', controllers.removeFromCart)


export default router