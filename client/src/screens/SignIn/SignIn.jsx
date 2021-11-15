import {history} from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../../services/users'


const SignIn = ({ user, setUser, loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const form = {
        email,
        password
      }
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div classname='sign-in-display-div'>
      <div classname='sign-in-div'>
        <form classname='sign-in-form' onSubmit={(ev) => handleSubmit(ev)} >
          <label classname='sign-in-email-label'>Email:</label>
          <input classname='sign-in-email-input' value={email} onChange={(ev) => setEmail(ev.target.value)} />
          <br/>
          <label classname='sign-in-password-label'>Password:</label>
          <input classname='sign-in-password-input' value={password} onChange={(ev) => setPassword(ev.target.value)} />
          <br/>
          <input type='submit' value='Sign In' />
        </form>
      </div>
    </div>
  )
}