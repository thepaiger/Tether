import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

// for development purposes
let SALT_ROUNDS = 11
let TOKEN_KEY = 'areallylonggoodkey'

// for production
if (process.env.NODE_ENV === 'production') {
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS)
  TOKEN_KEY = process.env.TOKEN_KEY
}

// for JWT expiration
const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const signUp = async (req, res) => {
  try {
    const { name, email, password, shopping_cart } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      name,
      email,
      password_digest,
      shopping_cart
    })

    await user.save()

    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      shopping_cart: user.shopping_cart,
      exp: parseInt(exp.getTime() / 1000),
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select(
      'name email password_digest shopping_cart'
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        shopping_cart: user.shopping_cart,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
}

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params
    const {password, newPassword} = req.body
    const user = User.findById(id).select(
      'name email password_digest shopping_cart'
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      user.password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS)
      user.save()
      const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        shopping_cart: user.shopping_cart,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(user)
}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        shopping_cart: user.shopping_cart,
        exp: parseInt(exp.getTime() / 1000),
      }
      
      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    }
    res.status(404).json({ message: 'User not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

//new


export const updateCartQuantity = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.shopping_cart[req.body.idx].quantity = req.body.quantity
    await user.save()
    if (user) {
      const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        shopping_cart: user.shopping_cart,
        exp: parseInt(exp.getTime() / 1000),
      }
      
      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
      // res.status(201).json(user)
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}
// export const updateCartQuantity = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     const itemIndex = user.shopping_cart.indexOf(req.params.cartId)
//     user.shopping_cart[itemIndex].quantity = req.body.quantity
//     await user.save()
//     if (user) {
//       const payload = {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         shopping_cart: user.shopping_cart,
//         exp: parseInt(exp.getTime() / 1000),
//       }
      
//       const token = jwt.sign(payload, TOKEN_KEY)
//       res.status(201).json({ token })
//       // res.status(201).json(user)
//     }
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json({error: error.message})
//   }
// }

export const addToCart = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    user.shopping_cart.push(req.body)

    await user.save()

    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      shopping_cart: user.shopping_cart,
      exp: parseInt(exp.getTime() / 1000),
    }
    
    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
    // res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.shopping_cart.splice(req.body.idx, 1)
    await user.save()

    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      shopping_cart: user.shopping_cart,
      exp: parseInt(exp.getTime() / 1000),
    }
    
    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
    // res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const clearCart = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    user.shopping_cart = []
    await user.save()

    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      shopping_cart: user.shopping_cart,
      exp: parseInt(exp.getTime() / 1000),
    }
    
    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
    // res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}