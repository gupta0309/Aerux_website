import React from "react";
import "../btn/HeadingLayout.css";

export default function HeadingLayout({ children }) {
  return (
    <div className="heading-wrapper">
      <div className="heading-content">
        {children}
      </div>
    </div>
  );
}

