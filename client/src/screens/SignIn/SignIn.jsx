import { Navigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../services/users";
import './SignIn.css'

const SignIn = ({ user, setUser, loggedIn, setLoggedIn }) => {
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
      setUser(user);
      setNavigateToggle(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (navigateToggle) {
    return <Navigate to="/" />;
  }

  return (
    <div className="sign-in-display-div">
      <div className="sign-in-div">
        <form className="sign-in-form" onSubmit={(ev) => handleSubmit(ev)}>
          <h2>Sign In</h2>

          <label className="sign-in-email-label" htmlFor="sign-in-email-input">Email:</label>
          <input
            className="sign-in-email-input"
            id="sign-in-email-input"
            type="email"
            value={email}
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <label className="sign-in-password-label" htmlFor="sign-in-password-input">Password:</label>

          {/* update type to password once testing complete */}
          <input
            className="sign-in-password-input"
            id="sign-in-password-input"
            type="text"
            value={password}
            placeholder="********"
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />

          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
