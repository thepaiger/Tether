import Car from '../models/car.js'

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find()
    res.json(cars)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getCar = async (req, res) => {
  try {
    const { id } = req.params
    const car = await Car.findById(id)
    if (car) {
      return res.json(car)
    }
    res.status(404).json({ message: 'Car not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createCar = async (req, res) => {
  try {
    const car = new Car(req.body)
    await car.save()
    res.status(201).json(car)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateCar = async (req, res) => {
  const { id } = req.params
  const car = await Car.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(car)
}

export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Car.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Car deleted')
    }
    throw new Error('Car not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
