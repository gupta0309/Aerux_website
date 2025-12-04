import './App.css'
import ContractAddress from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import StrategicPartners from './components/StrategicPartners'
import Hero from './components/Hero'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Usecases from './components/Usecases'
import Heading from './components/Heading'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presale from './components/Presale/Presale'
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeToggleButton from "./components/btn/ThemeToggleButton";
import HeroHeader from './components/HeroHeader'
import ClipButton from './components/btn/ClipButton'
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggleButton />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Hero />
                <Heading /> */}
                <HeroHeader />
                <About />
                <StrategicPartners />
                <Usecases />
                <Tokenomics />
                <Roadmap />
                <ContractAddress />
                <Footer />
              </>
            }
          />

          <Route path="/presale" element={<Presale />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


// import './App.css'
// import ContractAddress from './components/Contact'
// import Footer from './components/Footer'
// import About from './components/About'
// import StrategicPartners from './components/StrategicPartners'
// import Hero from './components/Hero'
// import Tokenomics from './components/Tokenomics'
// import Roadmap from './components/Roadmap'
// import Usecases from './components/Usecases'
// import Heading from './components/Heading'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Presale from './components/Presale/Presale'
// import ClipButton from './components/btn/ClipButton'
// import Mirrorbtn from './components/btn/mirrorbtn'
// import Clippath from './css/clippath'
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* HOME PAGE ROUTE */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Heading />
//               <About />
//              <StrategicPartners />
             
//               <Usecases />
//               <Tokenomics />
//               <Roadmap />
//               <ContractAddress />
//               <Footer /> 
        

//             </>
//           }
//         />

//         {/* PRESALE PAGE ROUTE */}
//         <Route path="/presale" element={<Presale />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// // import './App.css'
// // import ContractAddress from './components/Contact'
// // import Footer from './components/Footer'
// // import About from './components/About'
// // import StrategicPartners from './components/StrategicPartners'
// // import Hero from './components/Hero'
// // import Tokenomics from './components/Tokenomics'
// // import Roadmap from './components/Roadmap'
// // import Usecases from './components/Usecases'
// // import Heading from './components/Heading'
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Presale from './components/Presale'

// // function App() {
  

// //   return (
// //     <>
// //     <Hero/>
// //     <Heading/>
// //      <About/>
// //      <StrategicPartners/>
// //      <Usecases/>
// //      <Tokenomics/>
// //      <Roadmap/>
// //      <ContractAddress/>
// //      <Footer/>
// //      {/* <ThemeProvider/> */}

// //      <BrowserRouter>
      

// //       <Routes>
// //         <Route path="/" element={<Hero />} />
// //         <Route path="/presale" element={<Presale />} />
// //       </Routes>
// //     </BrowserRouter>
// //     </>
// //   )
// // }

// // export default App


