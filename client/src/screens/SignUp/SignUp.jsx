import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signUp } from "../../services/users";

const SignUp = ({ user, setUser, loggedIn, setLoggedIn }) => {
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
    if (match === true) {
      console.log('hello')
      try {
        const form = {
          "name": `${name}`,
          "email": `${email}`,
          "password": `${password}`,
          "shopping_cart": []
        };
        const user = await signUp(form);
        setUser(user);
        // setLoggedIn(true);
        setNavigateToggle(true);
      } catch (error) {
        console.error(error);
        setEmail("");
        setName("");
        setPassword("");
        setConfirm("");
      }
    }
  };

  if (navigateToggle) {
    return <Navigate to="/" />;
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

  const checkPassword = (v) => {
    if (password.length > 0 && password.length < 8) {
      lengthTrue()
    } else if (password === v && v.length > 7) {
      elseIfOne()
    } else if (password !== v && v.length === 0) {
      elseIfTwo()
    } else if (password !== v && v.length > 7) {
      elseIfThree()
    }
  };

  const handleChange = (ev) => {
    setConfirm(ev.target.value);
    checkPassword(ev.target.value);
  };

  return (
    <div className="sign-up-display-div">
      <div className="sign-up-div">
        <form className="sign-up-form" onSubmit={(ev) => handleSubmit(ev)}>
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
          <br />

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
          <br />

          <label
            className="sign-up-password-label"
            htmlFor="sign-up-password-input"
          >
            Password:
          </label>
          {/* update type to password once testing complete */}
          <input
            className="sign-up-password-input"
            id="sign-up-password-input"
            type="text"
            value={password}
            placeholder="********"
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <br />

          <label
            className="sign-up-confirm-label"
            htmlFor="sign-up-confirm-input"
          >
            Confirm Password:
          </label>
          {/* update type to password once testing complete */}
          <input
            className="sign-up-confirm-input"
            id="sign-up-confirm-input"
            type="text"
            value={confirm}
            placeholder="********"
            onChange={(ev) => handleChange(ev)}
            required
          />
          <br />

          {matchToggle ? (
            <div className="password-match-div">Passwords must match</div>
          ) : null}
          {lengthToggle ? (
            <div className="password-match-div">
              Password must be at least 8 characters
            </div>
          ) : null}
          <br />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
      <div>
        <Link to='/signIn'>Back to Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
