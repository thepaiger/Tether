import { Link } from "react-router-dom";
import "./CarDisplay.css";

const CarDisplay = ({car}) => {

  const handleClick = () => {
  console.log('clicked')
  }

  return (
    <div className="carDisplay">
      <Link className="card" to={`/cars/${car._id}`}>
        <div className="carDisplay-header">
          <img
            className="carDisplay-image"
            src={car.image}
            alt={car.model}
          />
        </div>
        <div className="carDisplay-column">
          <h3 className="carDisplay-make">Make: {car.make}</h3>
          <h3 className="carDisplay-model">Model: {car.model}</h3>
          <h3 className="carDisplay-price">Price: {car.price}</h3>
          <h3 className="carDisplay-price">HP: {car.hp}</h3>
          <h3 className="carDisplay-price">Top Speed: {car.topSpeed}</h3>
          <h3 className="carDisplay-price">Range: {car.range}</h3>
          <h3 className="carDisplay-price">Connector: {car.connector}</h3>
          <p className="carDisplay-info">Info: {car.info}</p>
        </div>
      </Link>
        <div className="carDisplay-icon">
        <img onClick={handleClick} src="/images/icons/bag-plus-fill.svg" alt="bag-plus-fill" />

        </div>
    </div>
  );
};
export default CarDisplay;
