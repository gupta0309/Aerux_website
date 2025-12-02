import React from "react";
import "../css/Borderframe.css"; // CSS file

const BorderFrame = ({ children }) => {
  return (
    <div className="border-frame-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 180"
        className="border-svg"
      >
      
        {/* <path
          className="outer-border"
          d="
            M40 30
            H460
            Q500 30, 520 60

            H680
            Q700 30, 740 30
            H1160

            Q1180 30, 1180 50
            V130
            Q1180 150, 1160 150
            H60
            Q40 150, 40 130
            V50
            Q40 30, 60 30
            Z"
        /> */}

        {/* INNER BORDER */}
        <path
          className="inner-border"
          d="
            M60 50
            H465
            Q495 50, 520 90
            
            H680
            Q705 50, 735 50
            H1140

            Q1155 50, 1155 65
            V115
            Q1155 130, 1140 130
            H60
            Q45 130, 45 115
            V65
            Q45 50, 60 50
          "
        />
      </svg>

      {/* LOGO SLOT */}
      <div className="logo-slot">{children}</div>
    </div>
  );
};

export default BorderFrame;