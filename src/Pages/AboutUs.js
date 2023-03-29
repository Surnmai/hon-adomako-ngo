import React from "react";

// import image
import About from "../images/about.jpg";

// import components
import TopBanner from "../Components/Global/TopBanner";
import OurTeam from "../Components/OurTeam";

const AboutUs = () => {
  return (
    <>
      <TopBanner img={About} title="About Us" text="Who we are?" />
      <OurTeam />
    </>
  );
};

export default AboutUs;
