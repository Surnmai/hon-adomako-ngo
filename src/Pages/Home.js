import React from "react";

// import components
import Hero from "../Components/Hero";
import About from "../Components/Mission";
import ForegroundBanner from "../Components/ForegroundBanner";
import Research from "../Components/Research";
import BackgroundImgBanner from "../Components/BackgroundImgBanner";
import OurTeam from "../Components/OurTeam";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ForegroundBanner />
      <Research />
      <BackgroundImgBanner />
      <OurTeam />
    </>
  );
};

export default Home;
