import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: String, required: true },
    priceNum: { type: Number, required: true},
    hp: { type: String, required: true },
    topSpeed: { type: String, required: true },
    info: { type: String, required: true },
    image: { type: String, required: true },
    range: { type: String, required: true },
    connector: { type: String, required: true },
  },
  { timestamps: true }
)
export default mongoose.model('cars', Car)