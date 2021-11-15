
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const SignIn = ({ user, setUser, loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, confirm] = useState('')
  const [match, setMatch] = useState(false)
  const [matchToggle, setMatchToggle] = useState(false)
  const [lengthToggle, setLengthToggle] = useState(false)
  const history = useHistory()
  
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (match === true) {
      try {
        const form = {
          name,
          email,
          password,
          "shopping_cart": []
        }
        const user = await signUp(form)
        setUser(user)
        setLoggedIn(true)
        history.push('/')
      } catch (error) {
        console.error(error)
        setEmail('')
        setName('')
        setPassword('')
        setConfirm('')
      }
    }
  }

  const checkPassword = () => {
    if (password.length > 0 && password.length < 8) {
      setLengthToggle(true)
    } else if (password === confirm && confirm.length > 7) {
      setMatch(true)
      setMatchToggle(false)
      setLengthToggle(false)
    } else if ( password !== confirm && confirm.length === 0) {
      setMatch(false)
      setMatchToggle(false)
      setLengthToggle(false)
    } else if (password !== confirm && confirm.length > 7) {
      setMatch(false)
      setMatchToggle(true)
      setLengthToggle(false)
    }
  }

  const handleChange = (ev) => {
    setConfirm(ev.target.value)
    checkPassword()
  }

  return (
    <div classname='sign-up-display-div'>
      <div classname='sign-up-div'>
        <form classname='sign-up-form' onSubmit={(ev) => handleSubmit(ev)} >
          <label classname='sign-up-name-label'>Name:</label>
          <input classname='sign-up-name-input' value={name} onChange={(ev) => setName(ev.target.value)} />
          <br />
          <label classname='sign-up-email-label'>Email:</label>
          <input classname='sign-up-email-input' value={email} onChange={(ev) => setEmail(ev.target.value)} />
          <br />
          <label classname='sign-up-password-label'>Password:</label>
          <input classname='sign-up-password-input' value={password} onChange={(ev) => setPassword(ev.target.value)} />
          <br />
          <label classname='sign-up-confirm-label'>Confirm Password:</label>
          <input classname='sign-up-confirm-input' value={confirm} onChange={(ev) => handleChange(ev)} />
          <br />
          {matchToggle ? <div classname='password-match-div'>Passwords must match</div> : null}
          {lengthToggle ? <div classname='password-match-div'>Password must be at least 8 characters</div> : null}
          <br />
          <input type='submit' value='Sign Up' />
        </form>
      </div>
    </div>
  )
}
