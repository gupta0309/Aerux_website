// import React, { useState } from "react";
// import "../css/Contact.css";
// import logo from "../assets/logo/addresslogo.png";


// export default function ContractAddress() {
//   const address = "0xabcdefabcdefabcdefabcdefabcdefabcd";

//   const [copied, setCopied] = useState(false);

//   const copyAddress = () => {
//     navigator.clipboard.writeText(address);
//     setCopied(true);

//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div className="contract-wrapper">
//       <div className="contract-container">
//         <div className="left-logo">
//           <img
//             src={logo}
//             alt="Logo"
//             className="logo-img"
//           />
//         </div>

//         <div className="right-content">
//           <h2 className="contract-heading">
//             CONTRACT <span>ADDRESS</span>
//           </h2>

//           <div className="address-box">{address}</div>

//           <button className="copy-btn" onClick={copyAddress}>
//             {copied ? "Copied!" : "Copy Address"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState } from "react";
import "../css/Contact.css";
import logo from "../assets/logo/address.png";


export default function ContractAddress() {
  const address = "0xabcdefabcdefabcdefabcdefabcdefabcd";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="contract-section">

      {/* OUTER FUTURISTIC BORDER FRAME */}
      <div className="contract-frame">

        {/* LEFT LOGO */}
        <div className="contract-left">
          <img
            src={logo}
            className="contract-logo"
            alt="logo"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="contract-right">
          <h2 className="contract-title">
            CONTRACT <span>ADDRESS</span>
          </h2>

          <div className="address-box">
            {address}
          </div>

          <button className="clip-btn" onClick={copyAddress}>
            {copied ? "Copied!" : <>Copy <span> Address</span></>}
          </button>

        </div>

      </div>
    </div>
  );
}
