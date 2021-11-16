import "./CarShopping.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CarShopping = ({car, car_id, price, item_id, quantity, image}) => {
  

  const getTotal = () => {
    let total = price * quantity;
    return total;
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
        {/* FIX IMAGE SOURCE LOCATION */}
        <div className="carShopping-image-div">
          <img className="carShopping-image" src={image} alt={car} />
        </div>
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
            value={quantity}
            onChange={(ev) => setQuantity(ev.target.value)}
            required
          />
          <h6>quantity</h6>
        </div>
        <div className="carShopping-total-div">
          {/* ADD LOGIC TO MULTIPLY HERE */}
          <h4>${getTotal}</h4>
          <h6>total</h6>
        </div>
      </Link>
    </div>
  );
};

export default CarShopping;
