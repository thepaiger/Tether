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
  const [navToggle, setNavToggle] = useState(false);

  let form = {};
  let newUser = "";

  useEffect(() => {
    setName(user ? user.name : "loading");
    setEmail(user ? user.email : "loading");
    setIdNumber(user ? user._id : "loading");
  }, [user]);

  // Delete user
  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteUser(user._id);
    setDelete(true);
    setUser(null);

  };

  if (isDeleted) {
    localStorage.clear();
    return <Navigate to={`/`} />;
  }


  //Update User Information
  const handleSubmit = async (event) => {
    event.preventDefault();

    form = {
      name,
      email,
    }

    await updateUser(user._id, form);
    setUpdated(true);
  };

  if (isUpdated) {
    const fetchNewUserData = async () => {
      newUser = await getUser(idNumber);
      if (newUser) {
        setUser(newUser);
        setNavToggle(true);
      }
    };
    fetchNewUserData();
  }

  if (navToggle) {
    return <Navigate to={`/user`} />;
  }

  return (
    <Layout user={user} setUser={setUser}>
      <div className="userUpdate-background-img">
        <div className="userUpdate-display-div">
          <div className="userUpdate-info-div" data-aos="zoom-in" data-aos-duration='500'>
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
              </div>

              <div className="userUpdate-btns">
                <button onClick={handleSubmit} className="userUpdate-update-btn">
                  {" "}
                  Update{" "}
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
