import React from "react";

// import component
import Button from "./Global/Button";

// import icons
import { FaAward, FaHandsHelping, FaProjectDiagram } from "react-icons/fa";

const ForegroundBanner = () => {
  return (
    <>
      <section className="frgBackground">
        <div className="content">
          <h3 className="title">
            We have contributed to self developing projects for the past 20
            years
          </h3>
          <Button name="Become part" path="/contact" />
        </div>
        <div className="icons">
          <div className="container">
            <div className="box">
              <FaAward />
              <div className="content">
                <h3>365</h3>
                <small> awards</small>
              </div>
            </div>
            <div className="box">
              <FaHandsHelping />
              <div className="content">
                <h3>365</h3>
                <small>partners</small>
              </div>
            </div>
            <div className="box">
              <FaProjectDiagram />
              <div className="content">
                <h3>365</h3>
                <small>projects</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForegroundBanner;
