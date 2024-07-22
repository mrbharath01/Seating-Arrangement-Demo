import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/index";
import LoginForm from "./components/LoginForm/index";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </div>
    </Router>
  );
}

export default App;
