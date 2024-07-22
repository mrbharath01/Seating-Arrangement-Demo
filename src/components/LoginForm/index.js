import React, { useState } from "react";
import "./index.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login logic
    if (email && password) {
      setMessage("Login successful!");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {message && <p className="login-message">{message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
