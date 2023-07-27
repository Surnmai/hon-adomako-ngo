import React from "react";

// import components
import Hero from "../Components/Hero";
import About from "../Components/Mission";
import ForegroundBanner from "../Components/ForegroundBanner";
import Research from "../Components/Research";
import BackgroundImgBanner from "../Components/BackgroundImgBanner";
import OurTeam from "../Components/OurTeam";

// import Helmet
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title data-rh="true">
          Aiperdlbg | Africa Institute for Policy Evaluation Research and
          Development.
        </title>
        <meta
          name="description"
          content="Aiperdlbg | Africa Institute for Policy Evaluation Research and
      Development "
        />
      </Helmet>
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
