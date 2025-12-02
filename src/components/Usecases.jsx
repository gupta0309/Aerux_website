import React, { useState } from "react";
import "../css/Usecases.css"; 
import  image1  from "../assets/usecase/1.png";
import  image2 from "../assets/usecase/2.png";
import  image3 from "../assets/usecase/3.png";
import  image4 from "../assets/usecase/4.png";
import  image5 from "../assets/usecase/5.png";
import img1 from "../assets/usecase/vector 1.png"
import img2 from "../assets/usecase/vector 2.png"
import img3 from "../assets/usecase/vector 3.png"
import img4 from "../assets/usecase/vector 4.png"
import img5 from "../assets/usecase/vector 5.png"

// --- IMAGE DATA STRUCTURE (Placeholder) ---
// Remember to replace 'path/to/...' with your actual imported image variables.
const images = [
  { 
    id: 1, 
    src: image1,
    title: "OTT SUBSCRIPTION", 
    description: "Use URX to access premium movies, web series, and exclusive digital content across the Aerux OTT platform.", 
    rightImg: img1
  },
  { id: 2, src:image2  ,title: "E-COMMERCE PAYMENT", description: "Use URX to pay for goods and services online...", rightImg: img2 },
  { id: 3, src: image3 ,title: "TICKETING", description: "Book tickets for events, movies, and more...", rightImg: img3 },
  { id: 4, src: image4, title: "GAMING", description: "Pay for in-game purchases and subscriptions...", rightImg: img4 },
{ id: 5, src: image5, title: "UTILITY BILLS", description: "Pay your electricity, water, and gas bills...", rightImg: img5 },
  
];

export default function Usecases() {
  const [selected, setSelected] = useState(images[0]);
  
  // Parameters for the semi-circular layout
  const radius = 165; 
  const imageSize = 120; 
  const numImages = images.length;
  
  // Arc Length: 180 degrees (Math.PI radians)
  const arcLength = Math.PI; 
  
  // *** KEY CHANGE FOR 180 DEGREE ROTATION ***
  // Starting point: -90 degrees (-Math.PI / 2 radians) - which is the bottom center
  // The arc will span from -90 degrees up to +90 degrees (Top center). 
  // This covers the right half of the circle.
  const startAngle = -Math.PI / 2; 

  return (
    <div className="usecase-wrapper">
      
      {/* 1. LEFT SEMI-CIRCLE LAYOUT (uc-left) */}
      <div className="uc-left">
        <div className="circle-box">
          {images.map((img, idx) => {
            // Calculate the angle, starting at -90 degrees (bottom) and ending at 90 degrees (top)
            const angle = startAngle + (arcLength / (numImages - 1)) * idx;
            
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <img
                key={img.id}
                src={img.src}
                alt={img.title}
                className={`circle-img ${selected.id === img.id ? "active-img" : image1}`}
                onClick={() => setSelected(img)}
                style={{
                  // Position the image relative to the center of the 'circle-box'
                  top: `calc(50% + ${y}px - ${imageSize / 2}px)`,
                  left: `calc(50% + ${x}px - ${imageSize / 2}px)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 2. CENTER CONTENT CARD (uc-center) */}
      <div className="uc-center">
        <div className="content-card" key={selected.id}> 
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
        </div>
      </div>

      {/* 3. RIGHT ALL IMAGES SECTION (uc-right) */}
      <div className="uc-right">
        {images.map((img) => (
            <img
                key={img.id}
                src={img.rightImg} 
                alt={`${img.title} visual`}
                className={selected.id === img.id ? "big-img" : "right-img small-img"}
                onClick={() => setSelected(img)}
            />
        ))}
      </div>
    </div>
  );
}