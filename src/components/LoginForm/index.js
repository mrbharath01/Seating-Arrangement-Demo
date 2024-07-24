import React, { useState } from "react";
import "./index.css";
import "../../styles/SeatBooking.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleNav = (e) => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage("Login successful!");
      navigate("/seats");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {message && <p className="login-message">{message}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
            <label className="form-label">User Id</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
            <label className="form-label">Password</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          Not a Member?{" "}
          <button className="register-btn" onClick={handleNav}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
