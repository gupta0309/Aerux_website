// import React, { useEffect, useState } from "react";
// import "../css/Roadmap.css";
// import image  from "../assets/roadmap/roadmap.png";

// export default function Roadmap() {
//   const cards = [
//     { id: 1, text: "Card One Content" },
//     { id: 2, text: "Card Two Content" },
//     { id: 3, text: "Card Three Content" },
//     { id: 4, text: "Card Four Content" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Infinite vertical rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % cards.length);
//     }, 2000); // speed

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="main-wrapper">

//       {/* LEFT SIDE */}
//       <div className="left-wrapper">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`card-box ${
//               index === currentIndex ? "active-card" : "dull-card"
//             }`}
//           >
//             {card.text}
//           </div>
//         ))}
//       </div>

//       {/* RIGHT SIDE IMAGE */}
//       <div className="right-wrapper">
//         <img
//           src={image}
//           alt="Right Visual"
//           className="right-image"
//         />
//       </div>

//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import "../css/Roadmap.css";
import image from "../assets/roadmap/roadmap.png"; 

export default function Roadmap() {
  const roadmapData = [
    {
      id: 1,
      quarter: "Q4",
      year: "2025",
      title: "Foundation",
      details:
        "   .    Launch URX token, deploy smart contracts, release MVP, and integrate secure wallet connectivity globally.",
    },
    {
      id: 2,
      quarter: "Q1",
      year: "2026",
      title: "Public Launch",
      details:
        "    .    Open platform globally, list URX on DEX, activate affiliate system, and onboard creators with premium content.",
    },
    {
      id: 3,
      quarter: "Q2",
      year: "2026",
      title: "Ecosystem Growth",
      details:
        "   .    Introduce NFT certifications, staking pools, tipping features, and AI recommendations to boost engagement and rewards.",
    },
    {
      id: 4,
      quarter: "Q3",
      year: "2026",
      title: "Expansion & Governance",
      details:
        "    .    Launch DAO governance, expand worldwide, integrate whitellbel OTT solutions, and explore metaverse-based learning environments.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite vertical rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [roadmapData.length]);

  return (
    <div className="main-wrapper">
      {/* LEFT SIDE: ROADMAP CARDS */}
      <div className="left-wrapper">
        {roadmapData.map((step, index) => (
          <div
            key={step.id}
            // className={`card-box ${
            //   index === currentIndex ? "active-card" : "dull-card"
            // }`}

className={`card-box card-${index + 1} ${
  index === currentIndex ? "active-card" : "dull-card"
}`}
       >
            {/* <div className="card-quarter-year">
              <span className="quarter-bubble">{step.quarter}</span>
              <span className="year-title-container">
                <span className="card-year">{step.year}</span>
                <h3 className="card-title"> - {step.title}</h3>
              </span>
            </div>
            <p className="card-details">{step.details}</p>
          </div> */}
          <div className="card-quarter-year">
             <div className="left-quarter"> <span className="quarter-bubble">{step.quarter}</span></div>
            <div className="right-quarter"><span className="year-title-container">
                <span className="card-year">{step.year}</span>
                <h3 className="card-title"> - {step.title}</h3>
              </span>
            <p className="card-details">{step.details}</p>
            </div></div>
          </div>

        ))}
        {/* ACTIVE CARD INDICATOR LINE - adjusts position based on active card */}
        <div 
          className="active-card-indicator" 
          style={{ transform: `translateY(${currentIndex * 88 + 10}px)` }} // 88px is approximate card height + margin
        ></div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="right-wrapper">
        <img
          src={image}
          alt="Roadmap Visual"
          className="right-image"
        />
      </div>
    </div>
  );
}