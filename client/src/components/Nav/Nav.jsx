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
  const signOut = () => {
    localStorage.setItem('token', "")
    setUser('')
  }
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">
          <img src={'/images/logo.png'} alt="Logo" className="logo" /></NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticadedOptions}
          {user ? <div onClick={signOut}>Sign Out</div> : null}
        </div>
      </div>
    </nav>
  )
}

export default Nav;