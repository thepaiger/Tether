import { useState, useEffect } from "react";
import "./Cars.css";
import Layout from "../../components/Layout/Layout.jsx";
import CarDisplay from "../../components/CarDisplay/CarDisplay.jsx";
import { getCars } from "../../services/cars.js";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const allCars = await getCars();
      setCars(allCars);
    };
    fetchCars();
  }, []);
  return (
    <Layout>
      <div className="cars-background-img">
        <div className="cars">
          {cars.map((car, index) => {
            return <CarDisplay car={car} key={index} />;
          })}
        </div>
        </div>
    </Layout>
  );
};
export default Cars;
