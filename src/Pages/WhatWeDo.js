import React from "react";

// import image
import Image from "../images/what-we-do1.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";

const WhatWeDo = () => {
  return (
    <>
      <TopBanner img={Image} title="What we do" text="services we provide" />
    </>
  );
};

export default WhatWeDo;
