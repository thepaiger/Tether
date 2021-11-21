import { Link } from "react-router-dom";
import "./CarDisplay.css";
import AOS from 'aos'

AOS.init(({
  duration: 1200,
}))

const CarDisplay = ({ car }) => {

  return (
    <div className="carDisplay" >
      <Link className="card" to={`/cars/${car._id}`}>
        <div className="carDisplay-header" data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement='center-bottom' data-aos-offset={window.innerWidth > 450 ? "150" : "300"} >
          <img className="carDisplay-image" src={car.image} alt={car.model} />
        </div>
        <div className="carDisplay-column" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement='center-bottom' data-aos-offset={window.innerWidth > 450 ? "150" : "200"}>
          <div className="carDisplay-make-icon">
            <h3 className="carDisplay-make">
              {car.make} {car.model}
            </h3>
          </div>

          <h3 className="carDisplay-price">{car.price}</h3>
          <p className="carDisplay-info">{window.innerWidth > 900 ? car.info.substring(0, 200) : car.info.substring(0, 100)}...</p>
        </div>
      </Link>
    </div>
  );
};
export default CarDisplay;

// data-aos='fade-down' data-aos-offset="300"
//  data-aos="fade-down" data-aos-duration="1000" data-aos-anchor-placement='center-bottom' data-aos-offset={window.innerWidth > 450 ? "150" : "100"}