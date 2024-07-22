import React, { useState } from "react";
import "./index.css";

function RegisterForm() {
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple registration logic
    if (employeeId && email && password) {
      setMessage("Registration successful!");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration</h2>
      {message && <p className="registration-message">{message}</p>}
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label className="form-label">Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="form-input"
            required
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
