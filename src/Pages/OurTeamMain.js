import React from "react";

// import image
import Image from "../images/what-we-do1.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import OurTeamCard from "../Components/Global/OurTeamCard";

// import data
import { ourteam } from "../data";

const OurTeamMain = () => {
  return (
    <>
      <TopBanner img={Image} title="What we do" text="services we provide" />

      <section className="our-team-main">
        <OurTeamCard array={ourteam} />
      </section>
    </>
  );
};

export default OurTeamMain;
