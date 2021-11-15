import { useState} from 'react'
import './UserUpdate.css'
import { Navigate } from 'react-router-dom'
import { Layout } from '../../../components'
import { updateUser, deleteUser } from '../../../services/users'

const UserUpdate = (props) => {
  const [isDeleted, setDelete] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  // let confirmPassword = props.password_digest;

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateUser(id, user)
    setUpdated(updated)
  }

  const handleDelete =  async (event) => {
    event.preventDefault()
    const deleted = await deleteUser(id, user)
    setDelete(deleted)
  }

  if (isUpdated) {
    return <Navigate to={`/user`} />
  }

  if (isDeleted) {
    return <Navigate to={`/`} />
  }

  return (
    <Layout>
      <div className='userUpdate-edit'>
        <form className='userUpdate-edit-form' onSubmit={handleSubmit}>
          <input
            className='userUpdate-name'
            placeholder={`${props.name}`}
            value={user.name}
            name='Update name:'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='userUpdate-email'
            placeholder={`${props.email}`}
            value={user.email}
            name='Update email:'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='userUpdate-password'
            placeholder='Password'
            value={user.password_digest}
            name='Update password:'
            required
            autoFocus
            onChange={handleChange}
          />
          {/* <input
            className='userUpdate-confirm-password'
            placeholder='Confirm Password'
            value={confirmPassword}
            name='Confirm password:'
            required
            autoFocus
            onChange={handlePassword}
          /> */}
          <div className='userUpdate-buttons'>
            <button type='submit' className='update-button'> Update Info </button>
            <button onClick={handleDelete} className='delete-button'> Delete Account </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default UserUpdate