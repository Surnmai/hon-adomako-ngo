import React from "react";

// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurTeaMain from "./Pages/OurTeamMain";
import ResearchPage from "./Pages/ResearchPage";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollTotop";
import Readmore from "./Pages/Readmore";
import Donate from "./Pages/Donate";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourteam" element={<OurTeaMain />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/readmore/:id" element={<Readmore />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
