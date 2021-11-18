import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">Copyright © 2021</p>

      <a className="footer-github" href="https://github.com/DarrylFalls/Tether">
        <img src={'/images/icons/github.svg'} alt='github link'></img>
      </a>
    </footer >
  )
}

export default Footer;