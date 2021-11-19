import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAllUsers, signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout.jsx";

import './SignUp.css'


const SignUp = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [match, setMatch] = useState(false);
  const [matchToggle, setMatchToggle] = useState(false);
  const [lengthToggle, setLengthToggle] = useState(false);
  const [navigateToggle, setNavigateToggle] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    checkPassword()
    if (email.includes('@') && email.includes('.com')) {
      if ((checkEmail()) === true) {
        if (password === confirm && password.length > 7) {
          try {
            const form = {
              "name": `${name}`,
              "email": `${email}`,
              "password": `${password}`,
              "shopping_cart": []
            };
            const user = await signUp(form);
            setUser(user);
            setNavigateToggle(true);
          } catch (error) {
            console.error(error);
            setEmail("");
            setName("");
            setPassword("");
            setConfirm("");
          }
        } else {
          setMatchToggle(true)
        }
      } else {
        alert(`Sorry, there is already an account for ${email}`)
      }
    } else {
      alert('Please use a valid email account.')
    }
  };

  if (navigateToggle) {
    return <Navigate to="/" />;
  }

  const checkEmail = async () => {
    const users = await getAllUsers()
    if (users.filter(account => account.email === email).length > 0) {
      return false
    } else {
      return true
    }
  }

  const lengthTrue = () => {
    setLengthToggle(true)
  }

  const elseIfOne = () => {
    setMatch(true);
    setMatchToggle(false);
    setLengthToggle(false);
  }

  const elseIfTwo = () => {
    setMatch(false);
    setMatchToggle(false);
    setLengthToggle(false);
  }

  const elseIfThree = () => {
    setMatch(false);
    setMatchToggle(true);
    setLengthToggle(false);
  }

  const checkPassword = () => {
    if (password.length > 0 && password.length < 8 && confirm.length < 8) {
      lengthTrue()
    } else if (password === confirm && confirm.length > 7) {
      elseIfOne()
    } else if (password !== confirm && confirm.length === 0) {
      elseIfTwo()
    } else if (password !== confirm && confirm.length > 7) {
      elseIfThree()
    }
  };

  const handleChange = (ev) => {
    setConfirm(ev.target.value);
  };

  return (
    <Layout user={user} setUser={setUser}>
      <div className="sign-up-background-img">
        <div className="sign-up-display-div">
          <div className="sign-up-div">
            <form className="sign-up-form" onSubmit={(ev) => handleSubmit(ev)}>
              <h2>Create an Account</h2>

              <div className="sign-up-fields">
                <label className="sign-up-name-label" htmlFor="sign-up-name-input">
                  Name:
                </label>
                <input
                  className="sign-up-name-input"
                  id="sign-up-name-input"
                  type="text"
                  value={name}
                  placeholder="name"
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />

                <label className="sign-up-email-label"
                  htmlFor="sign-up-email-input">
                  Email:
                </label>
                <input
                  className="sign-up-email-input"
                  id="sign-up-email-input"
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />

                <label
                  className="sign-up-password-label"
                  htmlFor="sign-up-password-input"
                >
                  Password:
                </label>
                <input
                  className="sign-up-password-input"
                  id="sign-up-password-input"
                  type="password"
                  value={password}
                  placeholder="********"
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />

                <label
                  className="sign-up-confirm-label"
                  htmlFor="sign-up-confirm-input"
                >
                  Confirm Password:
                </label>
                <input
                  className="sign-up-confirm-input"
                  id="sign-up-confirm-input"
                  type="password"
                  value={confirm}
                  placeholder="********"
                  onChange={(ev) => handleChange(ev)}
                  required
                />
              </div>

              {matchToggle ? (
                <div className="password-match-div">Passwords must match</div>
              ) : null}
              {lengthToggle ? (
                <div className="password-match-div">
                  Password must be at least 8 characters
                </div>
              ) : null}

              <input className="sign-up-submit" type="submit" value="Sign Up" />

              <div className="return-sign-in">
                <Link to='/signIn'>Return to Sign In</Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );

};

export default SignUp;
