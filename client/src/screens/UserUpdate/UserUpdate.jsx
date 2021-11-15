import { useState } from 'react'
import './UserUpdate.css'
import { Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx'
import { updateUser, deleteUser } from '../../services/users.js'

const UserUpdate = ({ user, setUser }) => {
  const [isDeleted, setDelete] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password_digest)
  const [confirm, setConfirm] = useState(user.password_digest)
  const [match, setMatch] = useState(false)
  
  // Delete user
  const handleDelete = async (event) => {
    event.preventDefault()
    const deleted = await deleteUser(user._id, user)
    setDelete(deleted)
  }

  if (isDeleted) {
      return <Navigate to={`/`} />
  }

  //Check Password
  const handleConfirm = (ev) => {
    setConfirm(ev.target.value)
    checkPassword()
  }

  const checkPassword = () => {
    if (password === confirm) {
      setMatch(true);
    } else {
      setMatch(false);
      // return alert("Passwords entered do not match");
    }
  }
  

  //Update User Information
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (match === true) {
      const form = {
        name,
        email,
        password,
        // "shopping_cart": []
      }
      const updated = await updateUser(user._id, form)
      setUpdated(updated)
    }
    
  }

  if (isUpdated) {
    return <Navigate to={`/user`} />
  }

  return (
    <Layout>
      <div className='userUpdate-edit'>
        <form className='userUpdate-edit-form'>
          <label className='userUpdate-name-label'>Update Name:</label><br />
          <input
            className='userUpdate-name-input'
            placeholder={`${name}`}
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          /><br />
          <label className='userUpdate-email-label'>Update Email:</label><br />
          <input
            className='userUpdate-email-input'
            placeholder={`${email}`}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          /><br />
          <label className='userUpdate-password-label'>Update Password:</label><br />
          <input
            className='userUpdate-password-input'
            placeholder='Password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          /><br />
          <label className='userUpdate-confirm-password-label'>Confirm Password:</label><br />
          <input
            className='userUpdate-confirm-password-input'
            placeholder='Confirm Password'
            value={confirm}
            onChange={(ev) => handleConfirm(ev)}
          /><br />
          <div className='userUpdate-buttons'>
            <button onClick={handleSubmit} className='update-button'> Update Info </button>
            <button onClick={handleDelete} className='delete-button'> Delete Account </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default UserUpdate