import './Home.css'
import { Layout, ProductCards } from '../../components'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='welcome-browse'>
        <h1>WELCOME TO THE FUTURE</h1>
        <NavLink to="/inventory">Browse Inventory</NavLink>
      </div>
      <div className="home-logo">
        <img src={'/images/logo.png'} alt="Logo" className="logo" />
        <p>Your one-stop shop for Electric Supercars</p>
      </div>
    </Layout>
  )
}

export default Home
