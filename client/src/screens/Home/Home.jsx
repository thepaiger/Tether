import './Home.css'
import { Layout } from '../../components'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ControlledCarousel from '../../components/Carousel/Carousel'



const Home = (props) => {
  const [count, setCount] = useState(0)
  const [imgUrl, setImgUrl] = useState("url(/images/backgrounds/rimac-home-page.jpeg)")
  const images = [
    '/images/backgrounds/2021-porsche-taycan.jpeg',
    '/images/backgrounds/lamborghini-terzo-millennio.jpg',
    '/images/backgrounds/rimac-home-page.jpeg'
  ]
  
  const changeImage = () => {
    if (count === 0) {
      setImgUrl(`url(${images[0]})`)
    } else if (count === 1) {
      setImgUrl(`url(${images[1]})`)
    } else if (count === 2) {
      setImgUrl(`url(${images[2]})`)
    }
  }

  const changeCount = () => {
    if (count === 0) {
      setCount(1)
    } else if (count === 1) {
      setCount(2)
    } else if (count === 2) {
      setCount(0)
    }
  }

  
  useEffect(() => {
    setTimeout(() => {
      changeCount()
      changeImage()
    }, 2000)
  })
    
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="home-background-image" style={{ backgroundImage: imgUrl }}>
        {/* <ControlledCarousel > */}
        <div className='home-content'>
          <div className="welcome-content">
            <h1 className="welcome-text">WELCOME TO THE FUTURE</h1>
            <NavLink to="/cars" className="browse-inventory">BROWSE INVENTORY</NavLink>
          </div>
          <div className="home-logo-box">
            <img src={'/images/logo.png'} alt="Logo" className="home-logo" />
            <p className="logo-subtext">YOUR ONE-STOP SHOP FOR ELECTRIC SUPERCARS</p>
          </div>
        </div>
        {/* </ControlledCarousel> */}
      </div>
    </Layout>
  )
}

export default Home;

// style={{ backgroundImage: imgUrl }}