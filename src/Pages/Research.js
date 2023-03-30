import React from "react";

// import image
import Image from "../images/projectBanner.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";

const Research = () => {
  return (
    <>
      <TopBanner img={Image} title="Research" text="Recent Research" />
    </>
  );
};

export default Research;
