import React from "react";

// import image
import Image from "../images/projectBanner2.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import ResearchCard from "../Components/Global/ResearchCard";
import { recentProjects } from "../data";

const Research = () => {
  return (
    <>
      <TopBanner img={Image} title="Research" text="Recent Research" />
      <section className="research-page">
        <ResearchCard array={recentProjects} title="African History" />
        <ResearchCard array={recentProjects} title="African Culture" />
        <ResearchCard array={recentProjects} title="African Tradition" />
      </section>
    </>
  );
};

export default Research;
