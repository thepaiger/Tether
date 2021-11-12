import { Router } from 'express'
import * as controllers from '../controllers/cars.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/cars', controllers.getCars)
router.get('/cars/:id', controllers.getCar)
router.post('/cars', controllers.createCar)
router.put('/cars/:id', controllers.updateCar)
router.post('/cars/:id', controllers.deleteCar)

export default router
