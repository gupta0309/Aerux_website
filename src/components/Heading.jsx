import React from "react";
import "../css/Heading.css";
import bgmp4 from "../assets/heading/frame.png"
import pause from "../assets/heading/Group 11.png"
import frame from "../assets/heading/frame.png"
export default function Heading() {
  return (
    <div className="learn-wrapper">
      <div className="learn-left">
        <h3>LEARNING ECOSYSTEM</h3>
        <p>
          AERLUX enables smart learning with AI-powered tools that
          simplify knowledge access. It helps users grow faster through
          personalized insights and real-time guidance.
        </p>
      </div>
{/* 
      <div className="learn-right">
        <div className="img-frame">
          {/* <img src="../assets/heading/book.mp4" alt="learning" /> */}
           {/* <video className="background-video-right" autoPlay loop muted playsInline> */}
                  {/* <source src={bgmp4} type="video/mp4" /> */}
                  {/* Your browser does not support the video tag. */}
                {/* <img src={pause} alt="learning" className="pause-btn" /> */}
                {/* </video>  */}
                 {/* <div className="video-overlay"></div> */}
          
        {/* <img src={pause} alt="learning" className="pause-btn" /> */}
           {/* <source src={bgmp4} type="video/mp4" />               */}
        {/* </div> */}

      {/* // </div>  */}


<div className="learn-right">
  
  <div className="img-frame">
    <video
      className="background-video-right"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={bgmp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for video dimming */}
    <div className="video-overlay"></div>

    {/* Small image on top of video */}
    <img
      src={pause} // replace with your image import or path
      alt="overlay"
      className="video-overlay-img"
    />
  </div>
  
</div>



    </div>
  );
}
