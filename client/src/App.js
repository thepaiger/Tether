import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';

import CarDetail from './screens/CarDetail/CarDetail.jsx'
import Cars from './screens/Cars/Cars.jsx'
import Home from './screens/Home/Home.jsx'
import ShoppingCart from './screens/ShoppingCart/ShoppingCart.jsx'
import SignIn from './screens/SignIn/SignIn.jsx'
import SignUp from './screens/SignUp/SignUp.jsx'
import UserAccount from './screens/UserAccount/UserAccount.jsx'
import UserUpdate from './screens/UserUpdate/UserUpdate.jsx'
import {verifyUser} from './services/users.js'


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
        <Route path="/signIn">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/signUp">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/cars">
          <Cars user={user}/>
        </Route>
        <Route path="/cars/:id">
          <CarDetail user={user}/>
        </Route>
        <Route path="/user">
          <UserAccount user={user} />
        </Route>
        <Route path="/user/edit">
          <UserUpdate user={user} />
        </Route>
        <Route path="/cart">
          <ShoppingCart user={user} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;