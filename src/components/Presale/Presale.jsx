import React from "react";
import "../Presale/presale.css";
import Navbar from "../Navbar";
import IconX from "../../assets/footer/twitter.png";
import IconDiscord from "../../assets/footer/game.png";
import IconInstagram from "../../assets/footer/insta.png";
// import bgmp4 from "../assets/presale/bg.mp4";
import AeruxInvestment from "./AeruxInvestment";
export default function Presale() {
  return (
    <>

    <Navbar/>
    <div className="presale-wrapper">
      {/* <video className="bg-video" autoPlay loop muted playsInline>
    <source src={bgmp4} type="video/mp4" />
  </video>

  <div className="main-container">
      LEFT SECTION */}
      <div className="presale-left">
        <h2 className="presale-heading">
          EXCLUSIVE EARLY ACCESS FOR <br />
          <span>VISIONARY INVESTORS</span>
        </h2>

        <p className="presale-desc">
          The Pre-Seed Round is the earliest and most impactful investment
          opportunity within the AERUX ecosystem. Designed for strategic
          partners and early supporters, this round unlocks maximum long-term
          value at the lowest entry price.
        </p>

        <button className="whitepaper-btn">Whitepaper</button>
      </div>

      {/* RIGHT CARD */}
      <div className="presale-card">
        <h3 className="presale-title">
          PRESALE NOW <span className="live">LIVE</span>
        </h3>

        {/* Timer */}
        <div className="timer-box">
          <div className="time">1</div>:
          <div className="time">1</div>:
          <div className="time">1</div>:
          <div className="time">1</div>:
        </div>

        <p className="presale-note">
          Last chance to buy before we go full <span>AERUX</span> mode.
        </p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-fill" style={{ width: "50%" }}></div>
        </div>

        <div className="price-box">
          <div>
            <p>Current Price</p>
            <span>$0.20</span>
          </div>
          <div>
            <p>Next Price</p>
            <span>$0.50</span>
          </div>
        </div>
      </div>
       <div className="side-text-">AERUX</div>
      
            {/* --- SOCIAL ICONS --- */}
            
            <div className="social-icons-">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={IconX} alt="X Icon" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src={IconDiscord} alt="Discord Icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={IconInstagram} alt="Instagram Icon" />
              </a>
            </div>
            </div>
        
    {/* </div> */}


<AeruxInvestment/>
    </>
  );
}
