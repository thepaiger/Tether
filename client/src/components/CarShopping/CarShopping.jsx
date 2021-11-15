// import "./CarShopping.css";
// import { Link } from "react-router-dom";

// const CarShopping = (props) => {
//   const [quantity, setQuantity] = useState(1);

//   const getTotal = () => {
//     let total = props.price * quantity;
//     return total;
//   }

//   return (
//     <div className="">
//       <div className="">
//         <img
//           className=""
//           src={"/images/icons/bag-dash-fill.svg"}
//           alt="remove from cart"
//         />
//       </div>
//       <Link className="" to={`/cars/${props._id}`}>
//         {/* FIX IMAGE SOURCE LOCATION */}
//         <div className="">
//           <img className="" src={props.image} alt={props.model} />
//         </div>
//         <div className="">
//           <h3>{props.make}</h3>
//           <h3>{props.model}</h3>
//         </div>
//         <div className="">
//           <h4>{props.price}</h4>
//           <h6>each</h6>
//         </div>
//         <div className="">
//           <input
//             type="number"
//             name="quantity"
//             value="1"
//             onChange={(ev) => setQuantity(ev.target.value)}
//             required
//           />
//           <h6>quantity</h6>
//         </div>
//         <div className="">
//           {/* ADD LOGIC TO MULTIPLY HERE */}
//           <h4>{getTotal}</h4>
//           <h6>total</h6>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default CarShopping;
