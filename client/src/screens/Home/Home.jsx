import './Home.css'
import { Layout } from '../../components'
import { NavLink } from 'react-router-dom'
// import ControlledCarousel from '../../components/Carousel/Carousel'

const Home = (props) => {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="home-background-image">
        {/* <ControlledCarousel /> */}
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
      </div>
    </Layout>
  )
}

export default Home;