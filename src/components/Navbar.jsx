import React from "react";
import { Link, useLocation } from "react-router-dom";
import AeruxLogo from "../assets/logo/logo.png"; 
import "../css/Navbar.css";

export default function Navbar() {
  const location = useLocation(); // For active link highlight

  return (
    <header className="navbar">
      {/* Left Links */}
      <nav className="nav-group nav-left-links">
        <a href="#home" className={`nav-item ${location.hash === "#home" ? "active" : ""}`}>HOME</a>
        <a href="#usecase" className={`nav-item ${location.hash === "#usecase" ? "active" : ""}`}>USECASE</a>
        <a href="#tokenomics" className={`nav-item ${location.hash === "#tokenomics" ? "active" : ""}`}>TOKENOMICS</a>
      </nav>

      {/* Center Logo */}
      <div className="navbar-center-logo">
        <img src={AeruxLogo} alt="Aerux Logo" className="navbar-logo" />
      </div>

      {/* Right Links & CTA */}
      <nav className="nav-group nav-right-links">
        <a href="#roadmap" className={`nav-item ${location.hash === "#roadmap" ? "active" : ""}`}></a>
        <Link to="/presale" className={`nav-item ${location.pathname === "/presale" ? "active" : ""}`}>PRESALE</Link>
        <button className="clip-btn">Buy URX</button>
      </nav>
    </header>
  );
}
