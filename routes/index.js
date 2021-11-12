import { Router } from 'express'
import carsRoutes from './cars.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send("This is the api root!"))

router.use("/", usersRoutes)
router.use("/", carsRoutes)

export default router