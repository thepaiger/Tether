import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/account-info">ACCOUNT INFO</NavLink>
  </>
)
const unauthenticadedOptions = (
  <>
    <NavLink className="link" to="/sign-in">SIGN IN</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/models">MODELS</NavLink>
  </>
)
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          -logo here-</NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticadedOptions}
        </div>
      </div>
    </nav>
  )
}

export default Nav;