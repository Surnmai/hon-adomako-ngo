import React from "react";

// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Ok from "./Pages/Ok";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Ok />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
