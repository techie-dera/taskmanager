import React, { useState } from "react";
import LoginImg from "../assets/Group.png";
import "../css/SignIn.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields");
      return;
    }
    console.log("error signing up");
  };

  return (
    <div className="Signup-container">
      <div className="Signup-box">
        <h2>Sign up</h2>
        <img src={LoginImg} alt="LoginImage" />
        {/* <SignIn/> */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="Confirm password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        {error && <div className="error">{error}</div>}
        <p>
          Have an account? <a href="/signup">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
