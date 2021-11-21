import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../services/users";
import Layout from "../../components/Layout/Layout.jsx";

import './SignIn.css'

const SignIn = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateToggle, setNavigateToggle] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const form = {
        "email": `${email}`,
        "password": `${password}`
      };
      const user = await signIn(form);
      if (user.name === 'Error') {
        alert("Email and/or Password are incorrect.")
      } else {
        setUser(user);
        setNavigateToggle(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (navigateToggle) {
    return <Navigate to="/" />;
  }

  return (
    <Layout user={user} setUser={setUser}>
      <div className="sign-in-background-img">
        <div className="sign-in-display-div" >
          <div className="sign-in-div" data-aos="zoom-in" data-aos-duration='500'>
            <form className="sign-in-form" onSubmit={(ev) => handleSubmit(ev)}>
              <h2>Sign In</h2>

              <div className="sign-in-fields">
                <label className="sign-in-email-label" htmlFor="sign-in-email-input">
                  Email:
                </label>
                <input
                  className="sign-in-email-input"
                  id="sign-in-email-input"
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
                <label
                  className="sign-in-password-label" htmlFor="sign-in-password-input"
                >
                  Password:
                </label>

                <input
                  className="sign-in-password-input"
                  id="sign-in-password-input"
                  type="password"
                  value={password}
                  placeholder="********"
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
              </div>

              <input className="sign-in-submit" type="submit" value="Submit" />

              <div className="no-account">
                <p>Don't have an account? <Link to='/signUp'>Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
