import React from "react";

// import data
import { recentProjects } from "../data";

// import component
import Button from "./Global/Button";
import ResearchCard from "./Global/ResearchCard";

// filter data according to description
const filteredData = recentProjects.filter((recent) => recent.desc === "first");
// console.log(filteredData);

// import context API
// import { useGlobalContext } from "../context";

const Research = () => {
  // const { filteredData } = useGlobalContext;
  // console.log(filteredData);
  return (
    <>
      <section className="recent">
        <ResearchCard array={filteredData} title="research" />

        <div className="button">
          <Button name="view more" path="/research" />
        </div>
      </section>
    </>
  );
};

export default Research;
