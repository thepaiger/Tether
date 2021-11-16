import { NavLink } from "react-router-dom";
import { Layout } from "../../components";
import { Navigate } from "react-router";
const UserAccount = ({ user, setUser }) => {
  const signOut = () => {
    localStorage.clear()
    setUser('');
  }

  if (user === '') {
    return <Navigate to='/' />
  }
  return (
    <Layout>
      <div className="account-info">
        {user && <div className="account-details">
          <p className="account-form">Name:</p>
          <p className="account-name">{user.name}</p></div>}

        {user && <div className="account-details">
          <p className="account-form">Email:</p>
          <p className="account-email">{user.email}</p></div>}

        <div className="account-details">
          <p className="account-form">Password:</p>
          <p className="account-password">********</p>
        </div>
        <div>
          <NavLink to="/user/edit">Edit Info</NavLink>
          {user ? <div onClick={signOut}>Sign Out</div> : null}
        </div>
      </div>
    </Layout>
  )
}

export default UserAccount;