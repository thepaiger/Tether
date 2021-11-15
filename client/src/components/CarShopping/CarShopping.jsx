// import "./CarShopping.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const CarShopping = (props) => {
//   const [quantity, setQuantity] = useState(1);

//   const getTotal = () => {
//     let total = props.price * quantity;
//     return total;
//   }

//   return (
//     <div className="carShopping">
//       <div className="carShopping-remove-icon">
//         <img
//           src={"/images/icons/bag-dash-fill.svg"}
//           alt="remove from cart"
//         />
//       </div>
//       <Link className="carShopping-link" to={`/cars/${props._id}`}>
//         {/* FIX IMAGE SOURCE LOCATION */}
//         <div className="carShopping-image-div">
//           <img className="carShopping-image" src={props.image} alt={props.model} />
//         </div>
//         <div className="carShopping-details-div">
//           <h3 className="carShopping-make">{props.make}</h3>
//           <h3 className="carShopping-model">{props.model}</h3>
//         </div>
//         <div className="carShopping-price-div">
//           <h4 className="carShopping-price">{props.price}</h4>
//           <h6>each</h6>
//         </div>
//         <div className="carShopping-quantity-div">
//           <input
//             type="number"
//             name="quantity"
//             value="1"
//             onChange={(ev) => setQuantity(ev.target.value)}
//             required
//           />
//           <h6>quantity</h6>
//         </div>
//         <div className="carShopping-total-div">
//           {/* ADD LOGIC TO MULTIPLY HERE */}
//           <h4>{getTotal}</h4>
//           <h6>total</h6>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default CarShopping;
