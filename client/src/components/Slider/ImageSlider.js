import { useParams } from "react-router-dom";
import { getCar } from "../../services/cars.js";
import { useState, useEffect } from "react";

const ImageSlider = (props) => {
  const [car, setCar] = useState("");
  const { id } = useParams();
  console.log(props);

  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
    };
    fetchCar();
  }, [id]);

  return (
    <div className="container">
        <img className="sliderImage" src={car.image} alt={car.model} />
      </div>
    
  );
};

export default ImageSlider;
