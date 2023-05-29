import React from "react";

// import image
import Image from "../images/what-we-do1.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import OurTeamCard from "../Components/Global/OurTeamCard";

// import data
import { ourteamAll } from "../data";

const OurTeamMain = () => {
  return (
    <>
      <TopBanner img={Image} title="What we do" text="Our honoured team " />

      <section className="our-team-main">
        <OurTeamCard array={ourteamAll} />
      </section>
    </>
  );
};

export default OurTeamMain;
