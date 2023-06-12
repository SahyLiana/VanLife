import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="signIn-btn">Sign in</button>
      </form>
      <p>
        <b>Don't have an account</b>
        <Link> Create one now</Link>
      </p>
    </div>
  );
}

export default Login;
