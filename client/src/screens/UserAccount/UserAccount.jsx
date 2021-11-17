import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { Navigate } from "react-router";

import './UserAccount.css'

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
      <div className="account-background-img">
        <div className="account-display-div">
          <div className="account-info-div">
            <div className="account-form">
              <h2>Account Info</h2>

              <div className="account-fields">
                {user && <div className="account-details-name">
                  <p className="account-name-label">Name:</p>
                  <p className="account-name">{user.name}</p></div>}

                {user && <div className="account-details-email">
                  <p className="account-email-label">Email:</p>
                  <p className="account-email">{user.email}</p></div>}

                <div className="account-details-password">
                  <p className="account-password-label">Password:</p>
                  <p className="account-password">********</p>
                </div>
              </div>
              <div className="account-btns">
                <Link className="account-edit-btn" to="/user/edit">Edit Info</Link>
                {user ?
                  <div className="account-sign-out-btn" onClick={signOut}>Sign Out</div>
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserAccount;