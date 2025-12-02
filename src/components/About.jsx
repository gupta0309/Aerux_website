// import React from "react";
// import "../css/About.css";

// export default function AboutURX() {
//   return (
//     <div className="about-container">
//       {/* LEFT IMAGE */}
//       <div className="about-left">
//         <img
//           src="/mnt/data/ee502645-59e5-485a-9fc6-6562400f2699.png"
//           alt="URX"
//           className="about-img"
//         />
//       </div>

//       {/* RIGHT CONTENT */}
//       <div className="about-right">
//         <h2 className="about-title">
//           ABOUT <span className="blue">URX</span>
//         </h2>

//         <p className="about-text">
//           Aerux is a next-generation Web3 platform that unifies entertainment,
//           education, and earning into one decentralized ecosystem. Built on
//           blockchain and powered entirely by smart contracts, Aerux empowers
//           users to watch, learn, and earn crypto rewards with total transparency
//           and zero central control.
//         </p>

//         <p className="about-text">
//           Designed for global accessibility, Aerux delivers premium OTT
//           streaming, NFT-certified learning experiences, creator-driven
//           monetization, and a reward-based affiliate economy, all integrated
//           seamlessly through the URX utility token. Every interaction—whether
//           viewing content, completing courses, or sharing with friends—creates
//           real value through automated, trustless crypto rewards.
//         </p>
//       </div>
//     </div>
//   );
// }






// import React from "react";
// import "../css/About.css";

// export default function AboutURX() {
//   return (
//     <div className="about-wrapper">

//       <div className="about-inner">

//         {/* LEFT IMAGE */}
//         <div className="about-left">
//           <img
//             src="/mnt/data/ee502645-59e5-485a-9fc6-6562400f2699.png"
//             className="about-img"
//             alt="URX Graphics"
//           />
//         </div>

//         {/* CENTER GRADIENT LINE */}
//         <div className="about-divider"></div>

//         {/* RIGHT CONTENT */}
//         <div className="about-right">
//           <h2 className="about-title">
//             ABOUT <span className="blue">URX</span>
//           </h2>

//           <p className="about-para">
//             Aerux is a next-generation Web3 platform that unifies entertainment,
//             education, and earning into one decentralized ecosystem. Built on
//             blockchain and powered entirely by smart contracts, Aerux empowers
//             users to watch, learn, and earn crypto rewards with total transparency
//             and zero central control.
//           </p>

//           <p className="about-para">
//             Designed for global accessibility, Aerux delivers premium OTT
//             streaming, NFT-certified learning experiences, creator-driven
//             monetization, and a reward-based affiliate economy, all integrated
//             seamlessly through the URX utility token. Every interaction—whether
//             viewing content, completing courses, or sharing with friends—creates
//             real value through automated, trustless crypto rewards.
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// }






import React from "react";
import "../css/About.css";
import about from "../assets/about/about.png";

export default function AboutURX() {
  return (
    <div className="about-wrapper">
      <div className="about-inner">
        <div className="about-left">
          <img
            src={about}
            className="about-img"
            alt="URX Graphics"
          />
        </div>

        <div className="about-divider"></div>

        <div className="about-right">
          <h2 className="about-title">
            ABOUT <span className="blue">URX</span>
          </h2>

          <p className="about-para">
            Aerux is a next-generation Web3 platform that unifies entertainment,
            education, and earning into one decentralized ecosystem. Built on
            blockchain and powered entirely by smart contracts, Aerux empowers
            users to watch, learn, and earn crypto rewards with total transparency
            and zero central control.
          {/* </p>
          <p className="about-para"> */}
            Designed for global accessibility, Aerux delivers premium OTT
            streaming, NFT-certified learning experiences, creator-driven
            monetization, and a reward-based affiliate economy, all integrated
            seamlessly through the URX utility token. Every interaction—whether
            viewing content, completing courses, or sharing with friends—creates
            real value through automated, trustless crypto rewards.
          </p>
        </div>
      </div>
    </div>
  );
}
