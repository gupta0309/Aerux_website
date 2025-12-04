

import React from "react";
// import "../style/StrategicPartners.css";
import "../css/StrategicPartners.css"

// import img1 from "../assets/1.png";
// import img2 from "../assets/2.png";
// import img3 from "../assets/3.png";
// import img4 from "../assets/4.png";
// import img5 from "../assets/5.png";
// import img6 from "../assets/6.png";


 import img1 from "../assets/logorow/logo1.png";
 import img2 from "../assets/logorow/logo2.png";
 import img3 from "../assets/logorow/logo3.png";
 import img4 from "../assets/logorow/logo4.png";
 import img5 from "../assets/logorow/logo5.png";
 import img6 from "../assets/logorow/Logo-04 (2).svg";


export default function StrategicPartners() {
  return (
    <div className="partners-section">
      <h2 className="partners-heading">
        STRATEGIC <span>PARTNERS</span>
      </h2>

      <div className="partners-grid">
        <div className="partner-box">
          <img src={img1} alt="Partner 1" className="partner-img" />
        </div>

        <div className="partner-box">
          <img src={img2} alt="Partner 2" className="partner-img" />
        </div>

        <div className="partner-box">
          <img src={img3} alt="Partner 3" className="partner-img" />
        </div>

        <div className="partner-box">
          <img src={img4} alt="Partner 4" className="partner-img" />
        </div>

        <div className="partner-box">
          <img src={img5} alt="Partner 5" className="partner-img" />
        </div>

        <div className="partner-box">
          <img src={img6} alt="Partner 6" className="partner-img" />
        </div>
      </div>
    </div>
  );
}