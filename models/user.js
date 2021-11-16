import mongoose from 'mongoose'
const Schema = mongoose.Schema
const User = new Schema(
  {
    name: { type: String, required: true, },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    shopping_cart: [
      {
        car: { type: String },
        car_id: { type: String },
        quantity: { type: Number },
        price: { type: String },
        priceNum: { type: Number },
        image: {type: String }
      },
    ],
  },
  { timestamps: true }
)
export default mongoose.model('users', User)