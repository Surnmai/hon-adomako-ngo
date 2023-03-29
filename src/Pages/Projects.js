import React from "react";

// import image
import Image from "../images/projectBanner.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";

const Projects = () => {
  return (
    <>
      <TopBanner img={Image} title="Projects" text="Projects worked on" />
    </>
  );
};

export default Projects;
