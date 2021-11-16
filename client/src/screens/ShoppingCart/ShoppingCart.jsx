import Layout from "../../components/Layout/Layout"
import {useState} from 'react'


const ShoppingCart = ({user, setUser}) => {
  const [total, setTotal] = useState(0)
  return (
    <Layout>
      <div>
        
      </div>
      <div> Total: ${total}</div>
    </Layout>
  )
}

export default ShoppingCart