import "./CarDetail.css";
import Layout from "../../components/Layout/Layout.jsx";
import { getCar } from "../../services/cars.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "../../components/Slider/ImageSlider";
import { addItem, updateQuantity } from "../../services/users";


const CarDetail = ({ user, setUser }) => {
  const [car, setCar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
      setLoaded(true);
    };
    fetchCar();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleButton = async () => {
    const cartItem = user.shopping_cart.find(item => item.car_id === car._id)
    if (cartItem) {
      const oldQuantity = (cartItem.quantity)
      const newQuantity = oldQuantity + 1
      const itemIndex = user.shopping_cart.findIndex(item => item.car_id === car._id)
      const data = {
        "quantity": newQuantity,
        "idx": itemIndex
      }
      const updatedUser = await updateQuantity(user._id, data)
      setUser(updatedUser)
    } else {
      const newCar = {
        car: `${car.make} ${car.model}`,
        car_id: `${car._id}`,
        quantity: 1,
        price: `${car.price}`,
        priceNum: car.priceNum,
        image: `${car.image}`
      }
      const addCar = await addItem(user._id, newCar)
      setUser(addCar)
    }
  }

  return (
    <Layout user={user} setUser={setUser}>
      <div className="car-detail-background-img">
        <div className="car-detail-container">
          <div className="car-detail-background">

            <div className="car-detail-header-div">
              <div className="car-detail-main-image" data-aos="fade-right" data-aos-duration="600">
                <img className="car-detail-image" src={car.image} alt={car.model} />
              </div>

              <div className="car-detail-textblock-main" data-aos="fade-left" data-aos-duration="600">
                <div className="car-detail-make-model">
                  {car.make} {car.model}
                </div>
                <div className="car-detail-price">{car.price}</div>
                <div className="car-detail-additional-info">
                  {`Horsepower:  ${car.hp}`}
                  <br />
                  {`Top Speed:  ${car.topSpeed}`}
                  <br />
                  {`Range:  ${car.range}`}
                  <br />
                  {`Charging Port Type:  ${car.connector}`}
                  <br />
                </div>
                {user ? <button className="button" onClick={handleButton}>
                  <div className="car-detail-icon">
                    <img
                      className="image-detail"
                      src="/images/icons/bag-plus-fill-detail.svg"
                      alt="bag-plus-fill"
                    />
                  </div>
                  Add to Cart
                </button> : null}
              </div>
            </div>
            <div className="car-detail-bio">
              <div className="car-detail-info" data-aos="zoom-out" data-aos-duration="600">
                {car.info}
              </div>
            </div>
          </div>

          <div className="car-detail-gallery" >
            <ImageSlider car={car} />
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default CarDetail;


//data-aos="fade-up" data-aos-duration="800"