import Layout from "../../components/Layout/Layout"
import { useEffect, useState } from 'react'
import CarShopping from "../../components/CarShopping/CarShopping"
import { clearCart } from "../../services/users"


const ShoppingCart = ({ user, setUser }) => {
  const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   user ? setShoppingCart(user.shopping_cart) : setShoppingCart([])
  // }, [user])

  const clear = async () => {
    const updatedUser = await clearCart()
    setUser(updatedUser)
  }
  
  return (
    <Layout user={user} setUser={setUser} >
      <div>
        {user ?
          user.shopping_cart ?
            user.shopping_cart.map((item, idx) => (
              <div>
                <CarShopping key={idx} idx={idx} user={user} setUser={setUser} car={item.car} car_id={item.car_id} price={item.price} priceNum={item.priceNum} item_id={item._id} quantity={item.quantity} image={item.image} />
              </div>
            ))
            : <div>Your cart is empty.</div>
          : null}
      </div>
      <div> Total: ${total}</div>
      <div>
        <button value='Clear Cart' onClick={clear}/>
      </div>
    </Layout>
  )
}

export default ShoppingCart