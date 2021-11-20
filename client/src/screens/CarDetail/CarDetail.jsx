import "./CarDetail.css";
import Layout from "../../components/Layout/Layout.jsx";
import { getCar } from "../../services/cars.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "../../components/Slider/ImageSlider";
import { addItem, updateQuantity } from "../../services/users";
// import AOS from 'aos'

// AOS.init(({
//   duration: 1200,
// }))


const CarDetail = (props) => {
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
    const cartItem = props.user.shopping_cart.find(item => item.car_id === car._id)
    if (cartItem) {
      const oldQuantity = (cartItem.quantity)
      const newQuantity = oldQuantity + 1
      const itemIndex = props.user.shopping_cart.findIndex(item => item.car_id === car._id)
      const data = {
        "quantity": newQuantity,
        "idx": itemIndex
      }
      const updatedUser = await updateQuantity(props.user._id, data)
      props.setUser(updatedUser)
    } else {
      const newCar = {
        car: `${car.make} ${car.model}`,
        car_id: `${car._id}`,
        quantity: 1,
        price: `${car.price}`,
        priceNum: car.priceNum,
        image: `${car.image}`
      }
      const addCar = await addItem(props.user._id, newCar)
      props.setUser(addCar)
    }
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="car-detail-background-img">
        <div className="car-detail-container">
          <div className="car-detail-background">

            <div className="car-detail-header-div">
              <div className="car-detail-main-image" data-aos="fade-right" data-aos-duration="800">
                <img className="car-detail-image" src={car.image} alt={car.model} />
              </div>

              <div className="car-detail-textblock-main" data-aos="fade-left" data-aos-duration="800">
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
            
                <button className="button" onClick={handleButton}>
                  <div className="car-detail-icon">
                    <img
                      className="image-detail"
                      src="/images/icons/bag-plus-fill-detail.svg"
                      alt="bag-plus-fill"
                    />
                  </div>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="car-detail-bio">
              <div className="car-detail-info" data-aos="zoom-out" data-aos-duration="800">
                {car.info}
              </div>
            </div>
          </div>

          <div className="car-detail-gallery" data-aos="fade-up" data-aos-duration="800">
            <ImageSlider car={car} />
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default CarDetail;
