import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-link">
          Home
        </Link>
      </div>
      <div className="navbar-right">
        <div className="align">
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
          <Link to="/history" className="navbar-link">
            History
          </Link>
          <Link
            to="/login"
            className="navbar-link"
            onClick={() => navigate("/login")}
          >
            Log-out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
