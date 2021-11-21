import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import CarShopping from "../../components/CarShopping/CarShopping";
import { clearCart } from "../../services/users";
import "./ShoppingCart.css";

const ShoppingCart = ({ user, setUser }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => {
      let total = 0;
      const cart = user.shopping_cart;
      for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].quantity * cart[i].priceNum;
      }
      return total.toLocaleString("en-US");
    });
  }, [user]);

  const clear = async () => {
    const updatedUser = await clearCart(user._id);
    setUser(updatedUser);
  };

  return (
    <Layout user={user} setUser={setUser}>
      <div className="shopping-cart-background-img">
        <div className="shopping-cart-display-div">
          <div className="shopping-cart-div">
            <div className="shopping-cart-header">
              <h2>GARAGE CONTENTS</h2>
              <button onClick={clear} className="shopping-cart-clear-btn">
                Clear Cart
              </button>
            </div>

            <div className="shopping-cart-car">
              {user ? (
                user.shopping_cart.length > 0 ? (
                  user.shopping_cart.map((item, idx) => (
                    <div className="item-map-div" key={idx}>
                      <CarShopping
                        idx={idx}
                        user={user}
                        setUser={setUser}
                        car={item.car}
                        car_id={item.car_id}
                        price={item.price}
                        priceNum={item.priceNum}
                        item_id={item._id}
                        quantity={item.quantity}
                        image={item.image}
                      />
                    </div>
                  ))
                ) : (
                  <div className="shopping-cart-empty">Your garage is empty</div>
                )
              ) : null}
            </div>
            <div className="shopping-cart-total">
              <p>Total: ${user ? total : 0}</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ShoppingCart;
