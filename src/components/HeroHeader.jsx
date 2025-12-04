import React, { useState, useEffect, useContext } from "react";
import "../css/HeroHeader.css";
import { ThemeContext } from "../Context/ThemeContext";

/* ASSETS - update paths if needed */
import logoDark from "../assets/HeroHeader/logo_dark.png";
import logoLight from "../assets/HeroHeader/logo_light.png";

import robotDark from "../assets/HeroHeader/heroimg.png";
import robotLight from "../assets/HeroHeader/heroimg.png";

import bgVideoDark from "../assets/HeroHeader/bg_dark.mp4";
import bgVideoLight from "../assets/HeroHeader/bg_light.mp4";


import twitterLight from "../assets/HeroHeader/social/twitter_light.png";
import discLight from "../assets/HeroHeader/social/discoed_light.png";
import instaLight from "../assets/HeroHeader/social/instagram_light.png";

import twitterIcon from "../assets/HeroHeader/social/twitter_light.png";
import discIcon from "../assets/HeroHeader/social/discoed_light.png";
import instaIcon from "../assets/HeroHeader/social/instagram_light.png";

import ThemeToggleButton from "../components/btn/ThemeToggleButton";

const HeroHeader = () => {
  const { theme } = useContext(ThemeContext); // expects "dark" or "light"
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < lastScroll) setShowHeader(true);
      else setShowHeader(false);
      setLastScroll(y <= 0 ? 0 : y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className={`hero-wrap ${theme === "dark" ? "dark" : "light"}`}>
      <div className="frame-container">

        {/* SVG rounded border (on top layer but pointer-events none) */}
        <svg className="frame-svg" viewBox="0 0 1400 760" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="gStroke" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#00d6ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00a6ff" stopOpacity="0.15" />
            </linearGradient>
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="20" floodColor="#000" floodOpacity="0.55" />
            </filter>
          </defs>

          {/* Outer border stroke */}
          <rect x="6" y="6" width="1388" height="748" rx="20" ry="20" fill="none"
            stroke="url(#gStroke)" strokeWidth="2" strokeOpacity="0.9" />

        </svg>

        {/* Background video or fallback */}
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          src={theme === "dark" ? bgVideoDark : bgVideoLight}
        />

        {/* Header (z-index above video, below svg outline) */}
        <header className={`site-header ${showHeader ? "visible" : "hidden"}`}>
          <div className="header-inner">
            <ul className="nav-left">
              <li className="active">HOME</li>
              <li>ABOUT US</li>
              <li>USECASE</li>
              <li>TOKENOMICS</li>
            </ul>

            <div className="logo-holder">
              <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />
            </div>

            <div className="nav-right">
              <ul className="nav-right-list">
                <li>ROADMAP</li>
                <li>PRESALE</li>
                <li>ONE PAGE</li>
              </ul>
              <button className="buy-btn">Buy URX</button>
            </div>
          </div>

          {/* Mobile header */}
          <div className="header-mobile">
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>
            <div className="logo-mobile">
              <img src={theme === "dark" ? logoDark : logoLight} alt="logo mobile" />
            </div>
            <button className="buy-btn small">Buy URX</button>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>USECASE</li>
              <li>TOKENOMICS</li>
              <li>ROADMAP</li>
              <li>PRESALE</li>
              <li>ONE PAGE</li>
            </ul>
          </div>
        </header>

        {/* Theme toggle (placed near right middle) */}
        <div className="theme-toggle">
          <ThemeToggleButton />
        </div>

        {/* Hero content */}
        <section className="hero-section">
          <div className="hero-left">
            <img src={theme === "dark" ? robotDark : robotLight} alt="robot" className="robot-img" />
          </div>

          <div className="hero-center">
            {/* Center container ensures vertical centering */}
            <div className="hero-content">
              <h1 className="hero-title">WATCH. LEARN. EARN.</h1>
              <h2 className="hero-sub">OWN THE <span>FUTURE</span></h2>
              <p className="hero-desc">
                A next-generation Web3 token powering decentralized entertainment, e-learning, creator monetization, and affiliate rewards. Built for a transparent, scalable, and community-driven digital ecosystem.
              </p>

              <div className="hero-actions">
                <button className="btn primary">Buy URX</button>
                <button className="btn secondary">Whitepaper</button>
              </div>
            </div>
          </div>

          {/* vertical brand text */}
          <div className="vertical-brand">A E R U X</div>

          {/* floating icons bottom-right */}
          <div className="floating-set">
            <button className="icon-btn"><img src={theme === "dark" ? twitterIcon : twitterLight} alt="close" /></button>
            <button className="icon-btn"><img src={theme === "dark" ? discIcon : discLight} alt="game" /></button>
            <button className="icon-btn"><img src={theme === "dark" ? instaIcon : instaLight} alt="camera" /></button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HeroHeader;





