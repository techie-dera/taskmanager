import React, { useState } from "react";
import LoginImg from '../assets/Group.png';
import '../css/SignIn.css'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    console.log("logging in with" + { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
		<img src={LoginImg} alt="LoginImage" />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <div className="error">{error}</div>}
        <p>Don't have an account? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
