import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="nav-link-account" to="/user">ACCOUNT INFO</NavLink>
    <NavLink className="nav-link-account-icon" to="/user">
      <img
        // onClick={handleClick}
        src="/images/icons/person-fill.svg"
        alt="shopping bag"
      />
    </NavLink>
  </>
)
const unauthenticadedOptions = (
  <>
    <NavLink className="nav-link-sign-in" to="/signIn">SIGN IN</NavLink>
    <NavLink className="nav-link-sign-in-icon" to="/signIn">
      <img
        // onClick={handleClick}
        src="/images/icons/door-open-fill.svg"
        alt="shopping bag"
      />
    </NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="nav-link-models" to="/cars">MODELS</NavLink>
    <NavLink className="nav-link-models-icon" to="/cars">
      <img
        // onClick={handleClick}
        src="/images/icons/view-list.svg"
        alt="shopping bag"
      />
    </NavLink>
  </>
)

const Nav = ({ user, setUser }) => {
  // const signOut = () => {
  //   localStorage.clear()
  //   setUser('');
  // }

  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/">
          <img className="nav-logo" src={'/images/logo.png'} alt="Logo" />
        </NavLink>
        <div className="nav-btns">
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticadedOptions}
          {/* {user ? <button className="nav-link-sign-out" onClick={signOut}>SIGN OUT</button> : null} */}
        </div>
      </div>
      <div className="nav-right">
        {user && <div className="nav-welcome">Welcome, &nbsp; {user.name}</div>}

        <NavLink className="nav-shopping-bag" to="/cart">
          <img
            // onClick={handleClick}
            src="/images/icons/bag-fill.svg"
            alt="shopping bag"
          />
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;