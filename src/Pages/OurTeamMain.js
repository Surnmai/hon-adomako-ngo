import React from "react";

// import image
import Image from "../images/what-we-do1.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import OurTeamCard from "../Components/Global/OurTeamCard";

// import data
import { ourteamAll } from "../data";

// import Helmet
import { Helmet } from "react-helmet";

const OurTeamMain = () => {
  return (
    <>
      <Helmet>
        <title>Aiperdlbg - Our Team</title>
        <meta name="description" content="Aiperdlbg Team " />
      </Helmet>
      <TopBanner img={Image} title="What we do" text="Our honoured team " />

      <section className="our-team-main">
        <OurTeamCard array={ourteamAll} />
      </section>
    </>
  );
};

export default OurTeamMain;
