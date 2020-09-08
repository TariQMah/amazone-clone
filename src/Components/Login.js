import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
  };
  const register = (e) => {};

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://www.cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
          className="login__logo"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>by signing-in you agree everthing what i want</p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
