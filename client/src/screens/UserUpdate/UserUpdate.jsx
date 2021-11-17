import { useState, useEffect } from "react";
import "./UserUpdate.css";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import { updateUser, deleteUser, getUser } from "../../services/users.js";

const UserUpdate = ({ user, setUser }) => {
  const [isDeleted, setDelete] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");

  // ==========COMMENT THIS IN/OUT FOR PASSWORD==========
  // const [password, setPassword] = useState("********");
  // const [confirm, setConfirm] = useState("********");
  // const [match, setMatch] = useState(false);
  // const [passwordToggle, setPasswordToggle] = useState(false);

  let form = {};
  let newUser = "";

  useEffect(() => {
    setName(user ? user.name : "loading");
    setEmail(user ? user.email : "loading");
    setIdNumber(user ? user._id : "loading");
    console.log(user ? user._id : "loading");
  }, [user]);

  // Delete user
  const handleDelete = async (event) => {
    event.preventDefault();
    const deleted = await deleteUser(user._id);
    console.log(deleted);
    setDelete(true);
    setUser(null);
  };

  if (isDeleted) {
    console.log("navigate home");
    return <Navigate to={`/`} />;
  }

  // ==========COMMENT THIS IN/OUT FOR PASSWORD==========
  // Check Password
  // const handleConfirm = (ev) => {
  //   setConfirm(ev.target.value);
  //   setPasswordToggle(true);
  //   checkPassword();
  // };

  // const checkPassword = () => {
  //   if (password === confirm) {
  //     setMatch(true);
  //   } else {
  //     setMatch(false);
  //     return alert("Passwords entered do not match");
  //   }
  // };

  //Update User Information
  const handleSubmit = async (event) => {
    event.preventDefault();

    // ==========COMMENT THIS IN/OUT FOR PASSWORD==========
    // if (passwordToggle) {
    //   if (match) {
    //     form = {
    //       name,
    //       email,
    //       password,
    //     };
    //   }
    // } else {
    //   form = {
    //     name,
    //     email,
    //   };
    // }

    // ==========COMMENT THIS OUT IF ABOVE IS COMMENTED IN==========
    form = {
      name,
      email,
    }

    const updated = await updateUser(user._id, form);
    console.log(`service return of updated: ${updated}`);
    setUpdated(true);
  };

  if (isUpdated) {
    const fetchNewUserData = async () => {
      newUser = await getUser(idNumber);
      if (newUser) {
        setUser(newUser);
        console.log("navigate user account");
        return <Navigate to={`/user`} />;
      }
    };
    fetchNewUserData();
  }

  return (
    <Layout>
      <div className="userUpdate-background-img">
        <div className="userUpdate-display-div">
          <div className="userUpdate-info-div">
            <form className="userUpdate-form">
              <h2>Account Info</h2>

              <div className="userUpdate-fields">
                <label className="userUpdate-name-label">Update Name:</label>
                <input
                  className="userUpdate-name-input"
                  placeholder="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />

                <label className="userUpdate-email-label">Update Email:</label>
                <input
                  className="userUpdate-email-input"
                  placeholder="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                {/* ==========COMMENT THIS IN/OUT FOR PASSWORD (through confirm password)========== */}
                {/* <label className="userUpdate-password-label">
                  Update Password:
                </label>
                <input
                  className="userUpdate-password-input"
                  placeholder="********"
                  onChange={(ev) => setPassword(ev.target.value)}
                />

                <label className="userUpdate-confirm-label">
                  Confirm Password:
                </label>
                <input
                  className="userUpdate-confirm-input"
                  placeholder="********"
                  onChange={(ev) => handleConfirm(ev)}
                /> */}
              </div>

              <div className="userUpdate-btns">
                <button onClick={handleSubmit} className="userUpdate-update-btn">
                  {" "}
                  Update Info{" "}
                </button>
                <button onClick={handleDelete} className="userUpdate-delete-btn">
                  {" "}
                  Delete Account{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserUpdate;
