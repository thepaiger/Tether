import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import React from 'react';
import CarDetail from './screens/CarDetail/CarDetail.jsx'
import Cars from './screens/Cars/Cars.jsx'
import Home from './screens/Home/Home.jsx'
import ShoppingCart from './screens/ShoppingCart/ShoppingCart.jsx'
import SignIn from './screens/SignIn/SignIn.jsx'
import SignUp from './screens/SignUp/SignUp.jsx'
import UserAccount from './screens/UserAccount/UserAccount.jsx'
import UserUpdate from './screens/UserUpdate/UserUpdate.jsx'
import { verifyUser } from './services/users.js'



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
        <Route exact path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        <Route path="/cars" element={<Cars user={user} />} />
        <Route path="/cars/:id" element={<CarDetail user={user} />} />
        <Route path="/user" element={<UserAccount user={user} setUser={setUser} />} />
        <Route path="/user/edit" element={<UserUpdate user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}
export default App;
