import { useState, useEffect } from "react";
import "./Cars.css";
import Layout from "../../components/Layout/Layout.jsx";
import CarDisplay from "../../components/CarDisplay/CarDisplay.jsx";
import { getCars } from "../../services/cars.js";

const Cars = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const allCars = await getCars();
      setCars(allCars);
    };
    fetchCars();
  }, []);
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="cars-background-img">
        {cars.length > 0 ?
          <div className="cars">
          {cars.map((car, index) => {
            return <CarDisplay
              car={car}
              key={index}
            />;
          })}
          </div> 
          :
          <div className='cars-loading-div'>
            Loading...
          </div>}
        </div>
    </Layout>
  );
};
export default Cars;
