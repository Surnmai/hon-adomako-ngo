import React from "react";

// import image
import Image from "../images/projectBanner2.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import ResearchCard from "../Components/Global/ResearchCard";
import { recentProjects } from "../data";

// filter data according to description for first
const filteredData = recentProjects.filter((recent) => recent.desc === "first");

// filter data according to description for first
const SecfilteredData = recentProjects.filter(
  (recent) => recent.desc === "second"
);

// filter data according to description for first
const ThirdfilteredData = recentProjects.filter(
  (recent) => recent.desc === "third"
);

const Research = () => {
  return (
    <>
      <TopBanner img={Image} title="Research" text="Recent Research" />
      <section className="research-page">
        <ResearchCard array={filteredData} title="African History" />
        <ResearchCard array={SecfilteredData} title="African Culture" />
        <ResearchCard array={ThirdfilteredData} title="African Tradition" />
      </section>
    </>
  );
};

export default Research;
