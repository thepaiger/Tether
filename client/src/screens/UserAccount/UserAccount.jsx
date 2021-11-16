const UserAccount = ({ user }) => {
  return (
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
    </div>
  )
}

export default UserAccount;