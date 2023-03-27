import React from "react";

// import data
import { recentProjects } from "../data";

// import component
import Button from "./Global/Button";
import ProjectsCard from "./Global/ProjectsCard";

const Recent = () => {
  return (
    <>
      <section className="recent">
        <ProjectsCard array={recentProjects} />

        <div className="button">
          <Button name="view more" path="/projects" />
        </div>
      </section>
    </>
  );
};

export default Recent;
