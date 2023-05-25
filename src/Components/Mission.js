import React from "react";

// import image
import MissionImg from "../images/mission.jpg";

const Mission = () => {
  return (
    <>
      <section className="mission">
        <div className="content">
          <h3 className="title">Our mission & vision</h3>
          <p>
            Empowering African communities to strive to see innovative ideas
            that are put into implementation, to augment skills and talents for
            development.
          </p>
          <p>
            The organization would become a catalyst for sustainable and
            empowered African development
          </p>
        </div>
        <div className="image">
          <img src={MissionImg} alt="mission-img" />
        </div>
      </section>
    </>
  );
};

export default Mission;
