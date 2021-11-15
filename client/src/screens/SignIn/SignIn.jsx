import { Navigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../services/users";

const SignIn = ({ user, setUser, loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateToggle, setNavigateToggle] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const form = {
        email,
        password,
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
    <div classname="sign-in-display-div">
      <div classname="sign-in-div">
        <form classname="sign-in-form" onSubmit={(ev) => handleSubmit(ev)}>
          <label classname="sign-in-email-label" htmlFor="sign-in-email-input">Email:</label>
          <input
            classname="sign-in-email-input"
            id="sign-in-email-input"
            type="email"
            value={email}
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <br />
          <label classname="sign-in-password-label" htmlFor="sign-in-password-input">Password:</label>

          {/* update type to password once testing complete */}
          <input
            classname="sign-in-password-input"
            id="sign-in-password-input"
            type="text"
            value={password}
            placeholder="********"
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <br />

          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
