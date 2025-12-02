// import React from "react";
// import "../css/Footer.css";
// import fb from "../assets/footer/fb.png";
// import yt from "../assets/footer/yt.png";
// import tw from "../assets/footer/twitter.png";
// import ig from "../assets/footer/insta.png";
// import tele from "../assets/footer/tele.png";
// import game from "../assets/footer/game.png";
// import logo from "../assets/logo/logo.png";
// import logoleft from "../assets/logo/footerright.png";

// export default function Footer() {
//   return (
//     <footer className=" footer-wrapper  text-white py-10">
//       <div className="footer-container w-full">
//         {/* LEFT SECTION */}
//         <div className="footer-left">
// <div className="footer-logo">
// <img src={logo} alt="logo" />
// </div>
//           <p className="footer-text">
//             Aerux is a next-generation Web3 platform that unifies entertainment,
//             education, and earning into one decentralized ecosystem. Built on
//             blockchain and powered entirely by smart contracts, Aerux empowers
//             users to watch, learn, and earn crypto rewards with total transparency
//             and zero central control.
//           </p>

//           <div className="social-icons">
//            <img src={fb} alt="Facebook" />
//            <img src={yt} alt="Twitter" />
//            <img src={tw} alt="Instagram" />
//            <img src={ig} alt="LinkedIn" />
//            <img src={tele} alt="LinkedIn" />
//            <img src={game} alt="LinkedIn" />
           
//           </div>
//         </div>


//         {/* RIGHT SECTION GRID */}
//         <div className="footer-right">
//           <div className="footer-col">
//             <h3>RESOURCES</h3>
//             <a href="#">Home</a>
//             <a href="#">About</a>
//           </div>

//           <div className="footer-col">
//             <h3>IMPORTENT</h3>
//             <a href="#">Whitepaper</a>
//             <a href="#">Buy Now</a>
//           </div>

//           <div className="footer-col">
//             <h3>LEGAL</h3>
//             <a href="#">How to Buy</a>
//           </div>
//         <div className="logo-right">
// <img src={logoleft}alt="logo" />
// </div>
//         </div>
//       </div>
//           <div className="footer-line"></div>

//           <p className="footer-copy">©2025 website. All Rights Reserved.</p>

//     </footer>
//   );
// }
import React from "react";

import "../css/Footer.css";

import fb from "../assets/footer/fb.png";

import yt from "../assets/footer/yt.png";

import tw from "../assets/footer/twitter.png";

import ig from "../assets/footer/insta.png";

import tele from "../assets/footer/tele.png";

import game from "../assets/footer/game.png";

import logo from "../assets/logo/logo.png";

import logoleft from "../assets/logo/footerright.png";



export default function Footer() {

  return (

    <footer className=" footer-wrapper  text-white py-10">

      <div className="footer-container w-full">

        {/* LEFT SECTION */}

        <div className="footer-left">

<div className="footer-logo">

<img src={logo} alt="logo" />

</div>

          <p className="footer-text">

            Aerux is a next-generation Web3 platform that unifies entertainment,

            education, and earning into one decentralized ecosystem. Built on

            blockchain and powered entirely by smart contracts, Aerux empowers

            users to watch, learn, and earn crypto rewards with total transparency

            and zero central control.

          </p>



          <div className="social-icons">

           {/* <img src={fb} alt="Facebook" /> */}

           <img src={yt} alt="Twitter" />

           <img src={tw} alt="Instagram" />

           {/* <img src={ig} alt="LinkedIn" /> */}

           <img src={tele} alt="Telegram" />

           {/* <img src={game} alt="LinkedIn" /> */}

           

          </div>

        </div>





        {/* RIGHT SECTION GRID */}

        <div className="footer-right">

          <div className="footer-col">

            <h3>RESOURCES</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

          </div>



          <div className="footer-col">

            <h3>IMPORTENT</h3>

            <a href="#">Whitepaper</a>

            <a href="#">Buy Now</a>

          </div>



          <div className="footer-col">

            <h3>LEGAL</h3>

            <a href="#">How to Buy</a>

          </div>

        <div className="logo-right">

<img src={logoleft}alt="logo" />

</div>

        </div>

      </div>

          <div className="footer-line"></div>



          <p className="footer-copy">©2025 website. All Rights Reserved.</p>



    </footer>

  );

}