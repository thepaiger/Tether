import "./CarShopping.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser, updateUser, removeItem, updateQuantity } from "../../services/users";


const CarShopping = ({ car, car_id, price, priceNum, item_id, quantity, image, user, idx, setUser, shoppingCart }) => {
  const [input, setInput] = useState('')

  useEffect(() => {
    const resetInput = () => {
      setInput(quantity)
    }
    resetInput()
  }, [])

  const getInput = (ev) => {
    setInput(ev.target.value)
  }

  const remove = async () => {
    const index = {
      "idx": idx
    }
    console.log(user._id)
    const updatedUser = await removeItem(user._id, index)
    setUser(updatedUser)
  }

  // const remove = async () => {
  //   const updatedUser = await removeItem(user._id, item_id)
  //   setUser(updatedUser)
  // }

  const editCart = async (ev) => {
    const data = {
      "quantity": ev,
      "idx": idx
    }
    const updatedUser = await updateQuantity(user._id, data)
    setUser(updatedUser)
  }

  const handleChange = (ev) => {
    getInput(ev)
    if (ev.target.value === "0") {
      remove()
    } else {
      editCart(ev.target.value)
    }
  }

  return (
    <div className="carShopping">
      <div className="carShopping-remove-icon" onClick={remove}>
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
