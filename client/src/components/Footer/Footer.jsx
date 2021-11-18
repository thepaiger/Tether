import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">Copyright © 2021</p>

      <NavLink to="https://github.com/DarrylFalls/Tether" className="footer-github">
        <img src={'/images/icons/github.svg'} alt='github link'></img>
      </NavLink>
    </footer >
  )
}

export default Footer;