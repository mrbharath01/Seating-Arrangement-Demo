import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/");
  };

  const onSubmitFailure = (error) => {
    setShowErrorMsg(true);
    setErrorMsg(error);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkClicked = () => {
    setCheck((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username: email,
          password,
        });
        onSubmitSuccess(response.data.jwt_token);
      } catch (error) {
        onSubmitFailure("Login failed.");
        console.error("Login failed:", error);
      }
    } else {
      onSubmitFailure("Please fill in all fields.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {showErrorMsg && <p className="login-message">* {errorMsg}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type={check ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="check"
              onClick={checkClicked}
              checked={check}
            />
            <label htmlFor="check">Show Password</label>
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <div className="register-link">
          Not a member?{" "}
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
