import "./CarShopping.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser, updateUser } from "../../services/users";


const CarShopping = ({ car, car_id, price, priceNum, item_id, quantity, image, user, idx, setUser, shoppingCart }) => {
  const [input, setInput] = useState('')
  // const [shoppingCart, setShoppingCart] = useState([])

  useEffect((quantity) => {
    const resetInput = () => {
      setInput(quantity)
    }

    // setShoppingCart(user.shopping_cart)
    resetInput()
  }, [])

  // const getTotal = () => {
  //   let total = priceNum * quantity;
  //   return `${total}`;
  // }



  const getInput = (ev) => {
    setInput(ev.target.value)
  }

  const remove = async () => {
    const tempCart = shoppingCart
    tempCart.splice(idx, 1)
    const newCart = {
      "shopping_cart": tempCart
    }
    await updateUser(`${user._id}`, newCart)
    const updatedUser = await verifyUser()
    setUser(updatedUser)
  }

  // const changeUser = (ev) => {
  //   shoppingCart[idx-1].quantity = ev
  // }

  // const newFunc = async () => {
  //   const form = {
  //     "shopping_cart": []
  //   }
  //   await updateUser(user._id, form)
  // }

  const editCart = async (ev) => {
    // const tempCart = shoppingCart
    // tempCart[idx].quantity = ev
    // changeUser(ev)
    const newQuantity = {
      "quantity": `${ev}`
    }
    await updateUser(user._id, newQuantity)
    // newFunc()
    const updatedUser = await verifyUser()
    setUser(updatedUser)
  }

  const handleChange = (ev) => {
    getInput(ev)
    if (ev === 0) {
      remove()
    } else {
      editCart(ev)
    }
  }

  return (
    <div className="carShopping">
      <div className="carShopping-remove-icon">
        <img
          src={"/images/icons/bag-dash-fill.svg"}
          alt="remove from cart"
        />
      </div>
      <Link className="carShopping-link" to={`/cars/${car_id}`}>
        <div className="carShopping-image-div">
          <img className="carShopping-image" src={image} alt={car} />
        </div>
      </Link>
      <div className="carShopping-details-div">
        <h3 className="carShopping-name">{car}</h3>
      </div>
      <div className="carShopping-price-div">
        <h4 className="carShopping-price">{price}</h4>
        <h6>each</h6>
      </div>
      <div className="carShopping-quantity-div">
        <input
          type="number"
          name="quantity"
          value={input}
          onChange={handleChange}
          required
        />
        <h6>quantity</h6>
      </div>
      <div className="carShopping-total-div">
        <h4>${priceNum * input}</h4>
        <h6>total</h6>
      </div>

    </div>
  );
};

export default CarShopping;
