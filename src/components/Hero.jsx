import React from 'react';
import '../css/Hero.css';

// --- ASSET IMPORTS ---
// NOTE: Please ensure these paths correctly point to your assets folder
import AeruxLogo from '../assets/logo/logo.png'; 
import RobotWithCoin from '../assets/hero/robo.png';
import bgmp4 from '../assets/hero/bg.mp4'; 
import IconX from '../assets/footer/twitter.png'; 
import IconDiscord from '../assets/footer/game.png';
import IconInstagram from '../assets/footer/insta.png';
import { Link } from "react-router-dom";
import BorderFrame from "../components/Borderframe";



export default function HeroSection() {
  
  return (
    // <div className="home-container">
 <div className="hero-container">
    
      {/* --- Background Video and Overlay --- */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bgmp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      {/* --- HEADER / NAVBAR (Logo Centered, Links Split) --- */}
      <header className="navbar">
        {/* Left Links */}
        <nav className="nav-group nav-left-links">
          <Link to="#home" className="nav-item ">HOME</Link>
             <Link to="#about" className="nav-item ">ABOUT US</Link>
          <Link to="#usecase" className="nav-item">USECASE</Link>
          <Link to="#tokenomics" className="nav-item">TOKENOMICS</Link>
        </nav>
        
        {/* Center Logo */}
        <div className="navbar-center-logo">
          <img src={AeruxLogo} alt="Aerux Logo" className="navbar-logo" />
        </div>
        
        {/* Right Links & CTA */}
        <nav className="nav-group nav-right-links">
          <Link to="#roadmap" className="nav-item">ROADMAP</Link>
          {/* <Link to="#presale" className="nav-item">PRESALE</Link> */}
         {/* <ul className="nav-list">
    <li className="nav-item"> */}
      <Link to="/presale">PRESALE</Link>
    {/* </li>
  </ul>   */}
     <Link to="#ONEPAGE" className="nav-item ">ONE PAGE</Link>
          <button className="clip-btn">Buy URX</button>
        </nav>
        {/* <nav className="nav-wrapper">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/presale">Presale</Link></li>
      </ul>
    </nav> */}
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content-area">
        {/* Robot Image (Left Side) */}
        <div className="robot-wrapper">
          <img src={RobotWithCoin} alt="Aerux Robot holding URX coin" className="robot-image" />
        </div>

        {/* Hero Text Content (Right Side) */}
        <div className="hero-text-content">
          <div className="tagline-row">
            <span className="tagline-word">WATCH.</span>
            <span className="tagline-word">LEARN.</span>
            <span className="tagline-word">EARN.</span>
          </div>
          
          <h1 className="main-title">
            <span className="highlight">OWN THE</span> FUTURE
          </h1>
          
          <p className="description-text">
            A next-generation Web3 token powering decentralized entertainment, e-learning, creator monetization, and affiliate rewards. Built for a transparent, scalable, and community-driven digital ecosystem.
          </p>
          
          <div className="cta-buttons">
            <button className="clip-btn">Buy URX</button>
            <button className="mirror-btn-ulta">Whitepaper</button>
          </div>
        </div>
      </div>

      {/* --- SIDE TEXT AERUX --- */}
      <div className="side-text">AERUX</div>

      {/* --- SOCIAL ICONS --- */}
      <div className="social-icons_">
        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={IconX} alt="X Icon" />
        </Link>
        <Link to="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src={IconDiscord} alt="Discord Icon" />
        </Link>
        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={IconInstagram} alt="Instagram Icon" />
        </Link>
      </div>
      {/* </BorderFrame> */}
    </div>
    // </div>

   
  );
}