import React from "react";

// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import WhatWeDo from "./Pages/WhatWeDo";
import Research from "./Pages/Research";
import Contact from "./Pages/Contact";
// import Blogs from "./Pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/research" element={<Research />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
