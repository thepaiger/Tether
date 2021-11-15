import { useState } from "react";
import { Navigate } from "react-router-dom";
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
      try {
        const form = {
          name,
          email,
          password,
          shopping_cart: [],
        };
        const user = await signUp(form);
        setUser(user);
        setLoggedIn(true);
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

  const checkPassword = () => {
    if (password.length > 0 && password.length < 8) {
      setLengthToggle(true);
    } else if (password === confirm && confirm.length > 7) {
      setMatch(true);
      setMatchToggle(false);
      setLengthToggle(false);
    } else if (password !== confirm && confirm.length === 0) {
      setMatch(false);
      setMatchToggle(false);
      setLengthToggle(false);
    } else if (password !== confirm && confirm.length > 7) {
      setMatch(false);
      setMatchToggle(true);
      setLengthToggle(false);
    }
  };

  const handleChange = (ev) => {
    setConfirm(ev.target.value);
    checkPassword();
  };

  return (
    <div classname="sign-up-display-div">
      <div classname="sign-up-div">
        <form classname="sign-up-form" onSubmit={(ev) => handleSubmit(ev)}>
          <label classname="sign-up-name-label" htmlFor="sign-up-name-input">
            Name:
          </label>
          <input
            classname="sign-up-name-input"
            id="sign-up-name-input"
            type="text"
            value={name}
            placeholder="name"
            onChange={(ev) => setName(ev.target.value)}
            required
          />
          <br />

          <label classname="sign-up-email-label"
            htmlFor="sign-up-email-input">
            Email:
          </label>
          <input
            classname="sign-up-email-input"
            id="sign-up-email-input"
            type="email"
            value={email}
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <br />

          <label
            classname="sign-up-password-label"
            htmlFor="sign-up-password-input"
          >
            Password:
          </label>
          {/* update type to password once testing complete */}
          <input
            classname="sign-up-password-input"
            id="sign-up-password-input"
            type="text"
            value={password}
            placeholder="********"
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <br />

          <label
            classname="sign-up-confirm-label"
            htmlFor="sign-up-confirm-input"
          >
            Confirm Password:
          </label>
          {/* update type to password once testing complete */}
          <input
            classname="sign-up-confirm-input"
            id="sign-up-confirm-input"
            type="text"
            value={confirm}
            placeholder="********"
            onChange={(ev) => handleChange(ev)}
            required
          />
          <br />

          {matchToggle ? (
            <div classname="password-match-div">Passwords must match</div>
          ) : null}
          {lengthToggle ? (
            <div classname="password-match-div">
              Password must be at least 8 characters
            </div>
          ) : null}
          <br />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
