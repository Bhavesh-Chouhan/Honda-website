import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.honda2wheelersindia.com/assets/images/logo.png"
              alt="HONDA"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Services"
                  className="nav-link active"
                  aria-current="page"
                  href
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Bikes"
                  className="nav-link active"
                  aria-current="page"
                  href
                >
                  Bikes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Jobs"
                  className="nav-link active"
                  aria-current="page"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link active"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
