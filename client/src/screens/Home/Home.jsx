import './Home.css'
import { Layout } from '../../components'
// import { NavLink } from 'react-router-dom'
// import ControlledCarousel from '../../components/Carousel/Carousel'

const Home = (props) => {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      {/* <ControlledCarousel /> */}
    </Layout>
  )
}

export default Home
