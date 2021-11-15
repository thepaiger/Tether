import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {verifyUser} from './services/users.js'
import './App.css';

import CarDetail from './screens/CarDetail.jsx'
import Cars from './screens/Cars.jsx'
import Home from './screens/Home.jsx'
import ShoppingCart from './screens/ShoppingCart.jsx'
import SignIn from './screens/SignIn.jsx'
import SignUp from './screens/SignUp.jsx'
import UserAccount from './screens/UserAccount.jsx'
import UserUpdate from './screens/UserUpdate.jsx'
import {verifyUser} from './services/users'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])


  return (
    <div className="App">
      <Routes>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/sign-up">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/sign-in">
            <SignIn setUser={setUser} />
          </Route>
          <Route exact path="/products">
            <Products user={user} />
          </Route>
          <Route path="/add-product">
            {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route exact path="/products/:id/edit">
            {user ? <ProductEdit user={user} /> : <Redirect to='/' />}
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail user={user} />
          </Route>
      </Routes>
    </div>
  );
}
export default App;
