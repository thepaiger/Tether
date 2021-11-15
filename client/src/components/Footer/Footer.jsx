import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="copyright">Copyright © 2021</p>
        <a href="https://github.com/DarrylFalls/Tether" className="github-footer"><img src={'/images/icons/github.svg'}></img></a>
      </div>
    </footer>
  )
}

export default Footer;