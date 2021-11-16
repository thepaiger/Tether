import Layout from "../../components/Layout/Layout"
import { useEffect, useState } from 'react'
import CarShopping from "../../components/CarShopping/CarShopping"


const ShoppingCart = ({user, setUser}) => {
  const [total, setTotal] = useState(0)
  
  return (
    <Layout>
      <div>
        {user ? 
          user.shopping_cart.map((item, idx) => (
            <div>
              <CarShopping key={idx} idx={idx} user={user} setUser={setUser} car={item.car} car_id={item.car_id} price={item.price} priceNum={item.priceNum} item_id={item._id} quantity={item.quantity} image={item.image} />
              {() => setTotal(total + (item.priceNum * item.quantity))}
            </div>
        ))
        : null}
      </div>
      <div> Total: ${total}</div>
    </Layout>
  )
}

export default ShoppingCart