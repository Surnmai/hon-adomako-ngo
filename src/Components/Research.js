import React from "react";

// import data
import { recentProjects } from "../data";

// import component
import Button from "./Global/Button";
import ResearchCard from "./Global/ResearchCard";

const Research = () => {
  return (
    <>
      <section className="recent">
        <ResearchCard array={recentProjects} title="research" />

        <div className="button">
          <Button name="view more" path="/research" />
        </div>
      </section>
    </>
  );
};

export default Research;
