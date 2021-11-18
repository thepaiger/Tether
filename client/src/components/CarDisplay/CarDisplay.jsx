import { Link } from "react-router-dom";
import "./CarDisplay.css";

const CarDisplay = ({ car }) => {
  // const handleClick = () => {
  //   console.log("clicked");
  // };

  return (
    <div className="carDisplay">
      <Link className="card" to={`/cars/${car._id}`}>
        <div className="carDisplay-header">
          <img className="carDisplay-image" src={car.image} alt={car.model} />
        </div>
        <div className="carDisplay-column">
          <div className="carDisplay-make-icon">
            <h3 className="carDisplay-make">
              {car.make} {car.model}
              {/* <div className="carDisplay-icon">
              <img
                onClick={handleClick}
                src="/images/icons/bag-plus-fill.svg"
                alt="bag-plus-fill"
              />
            </div> */}
            </h3>
          </div>
          <h3 className="carDisplay-price">{car.price}</h3>
          <p className="carDisplay-info">{car.info.substring(0, 200)}...</p>
        </div>
      </Link>
    </div>
  );
};
export default CarDisplay;
