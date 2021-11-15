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