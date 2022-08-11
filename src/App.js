import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Goodies from "./components/Goodies";
import About from "./components/About";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/goodies" element={<Goodies />}/>

      <Navbar />
      </Routes>

    </div>
  );
}

export default App;
