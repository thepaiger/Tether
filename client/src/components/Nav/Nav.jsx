import './Nav.css'
import { NavLink } from 'react-router-dom'


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/user">ACCOUNT INFO</NavLink>
  </>
)
const unauthenticadedOptions = (
  <>
    <NavLink className="link" to="/signIn">SIGN IN</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/cars">MODELS</NavLink>
  </>
)

const Nav = ({ user, setUser }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">
          <img src={'/images/logo.png'} alt="Logo" className="logo" /></NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.name}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticadedOptions}
        </div>
      </div>
    </nav>
  )
}

export default Nav;