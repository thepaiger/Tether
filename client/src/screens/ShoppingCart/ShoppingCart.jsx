import Layout from "../../components/Layout/Layout"
import { useState } from 'react'
import CarShopping from "../../components/CarShopping/CarShopping"


const ShoppingCart = ({user, setUser}) => {
  const [total, setTotal] = useState(0)
  return (
    <Layout>
      <div>
        {user ? 
          user.shopping_cart.map((item) => (
            <div>
              <CarShopping car={item.car} car_id={item.car_id} price={item.price} item_id={item._id} quantity={item.quantity} image={item.image} />
            </div>
        ))
        : null}
      </div>
      <div> Total: ${total}</div>
    </Layout>
  )
}

export default ShoppingCart