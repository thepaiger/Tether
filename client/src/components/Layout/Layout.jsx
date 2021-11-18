import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => (
  <div className="layout">

    <div className="layout-children">
      {props.children}
    </div>
    <Nav user={props.user} setUser={props.setUser} />
    <Footer />
  </div>
)

export default Layout