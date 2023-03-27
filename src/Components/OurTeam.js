import React from "react";

// import component
import OurTeamCard from "./Global/OurTeamCard";
import Button from "./Global/Button";

// import data
import { ourteam } from "../data";

const OurTeam = () => {
  return (
    <>
      <section className="our-team">
        <OurTeamCard array={ourteam} />

        <div className="button">
          <Button name="view more" path="/ourteam" />
        </div>
      </section>
    </>
  );
};

export default OurTeam;
