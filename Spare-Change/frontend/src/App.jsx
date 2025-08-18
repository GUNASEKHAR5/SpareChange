// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import {Route ,BrowserRouter as Router} from "react-router-dom";
// import Home from "./pages/Home";
// import LoginPage from "./pages/Login";
// import Investment from "./pages/Invest";        
  


// // placeholders so links don’t 404
// const Wallet = () => <div style={{padding:20}}>Wallet page</div>;
// const Donate = () => <div style={{padding:20}}>Donate page</div>;
// const Invest = () => <div style={{padding:20}}>Invest page</div>;
// const GetStarted = () => <div style={{padding:20}}>Get Started</div>;
// const LearnMore = () => <div style={{padding:20}}>Learn More</div>;

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/Login" element={<LoginPage />} />
//       <Route path="/wallet" element={<Wallet />} />
//       <Route path="/donate" element={<Donate />} />
//       <Route path="/Invest" element={<Invest />} />
//       <Route path="/get-started" element={<GetStarted />} />
//       <Route path="/learn-more" element={<LearnMore />} />
//       </Routes>
//     </Router>
//   );
// }


import React from "react";
import {Route ,Routes,BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Investment from "./pages/Invest";

// placeholders so links don’t 404
const Wallet = () => <div style={{padding:20}}>Wallet page</div>;
const Donate = () => <div style={{padding:20}}>Donate page</div>;
// const Invest = () => <div style={{padding:20}}>Invest page</div>;
const GetStarted = () => <div style={{padding:20}}>Get Started</div>;
const LearnMore = () => <div style={{padding:20}}>Learn More</div>;

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/Invest" element={<Investment/>} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}