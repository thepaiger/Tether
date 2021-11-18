import './CarDetail.css'
import Layout from '../../components/Layout/Layout.jsx'
import { getCar } from '../../services/cars.js'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CarDetail = (props) => {
  const [car, setCar] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  console.log(props);

  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
      setLoaded(true);
    }
    fetchCar()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className='car-detail-background-img'>
        <div className="car-detail-background">
        <img
          className='car-detail-image'
          src={car.image}
          alt={car.model}
        />
        <div className='car-detail-textblock-main'>
          <div className='car-detail-makeAndModel'>{car.make} {car.model}</div>
          <div className='car-detail-price'>{car.price}</div>
          <div className='car-detail-textblock-sub'>
            <div className='car-detail-info'>{car.info}<br /></div>
            <div className='car-detail-additional-info'>
              {`Horsepower: ${car.hp}`}<br />
              {`Top Speed: ${car.topSpeed}`}<br />
              {`Range: ${car.range}`}<br />
              {`Charging Port Type: ${car.connector}`}<br />
            </div>
          </div>
          {/* <button onClick={handleButton}>{`${addToCartButton}`}</button> */}
          <button className="button">
          <div className="carDetail-icon">
              <img className="image-detail"
                src="/images/icons/bag-plus-fill-detail.svg"
                alt="bag-plus-fill"
              />
            </div>
            Add to Cart
          </button>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default CarDetail;