import { Link } from "react-router-dom";
import "./CarDisplay.css";

const CarDisplay = (props) => {

  const handleClick = () => {
  console.log('clicked')
  }

  return (
    <div className="carDisplay">
      <Link className="card" to={`/cars/${props._id}`}>
        <div className="carDisplay-header">
          <img
            className="carDisplay-image"
            src={props.image}
            alt={props.model}
          />
        </div>
        <div className="carDisplay-column">
          <h3 className="carDisplay-make">{props.make}</h3>
          <h3 className="carDisplay-model">{props.model}</h3>
          <h3 className="carDisplay-price">{props.price}</h3>
          <p className="carDisplay-info">{props.info.subtring(0, 100)}...</p>
        </div>
      </Link>
        <div className="carDisplay-icon">
        <img onClick={handleClick} src="" alt="bag-plus-fill" />
        </div>
    </div>
  );
};
export default CarDisplay;
