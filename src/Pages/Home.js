import React from "react";

// import components
import Hero from "../Components/Hero";
import About from "../Components/Mission";
import ForegroundBanner from "../Components/ForegroundBanner";
import Recent from "../Components/Recent";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ForegroundBanner />
      <Recent />
    </>
  );
};

export default Home;
