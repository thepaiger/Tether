import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

//regular routes
router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.put('/change-password/:id', controllers.changePassword)
router.delete('/users/:id', controllers.deleteUser)
router.get('/users', controllers.getUsers)
router.put('/update/:id', controllers.updateUser)
router.get('/users/:id', controllers.getUser)

//custom routes
router.put('/users/cart/:id', controllers.updateCartQuantity)
router.post('/users/add-item/:id', controllers.addToCart)
router.put('/users/remove-item/:id', controllers.removeFromCart)
router.delete('/users/clear-cart/:id', controllers.clearCart)


export default router