import React from "react";

// import component
import Button from "./Global/Button";

// import icons
import { FaHandsHelping } from "react-icons/fa";
import { GiHazardSign } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";

const ForegroundBanner = () => {
  return (
    <>
      <section className="frgBackground">
        <div className="content">
          <h3 className="title">
            {/* We have contributed to self developing projects for the past 20
            years */}
            AIPERD researches Ghana's Free SHS, African political change, and
            environmental degradation policies.
          </h3>
          <Button name="Become part" path="/contact" />
        </div>
        <div className="icons">
          <div className="container">
            <div className="box">
              <IoSchool />
              <div className="content">
                {/* <h3>365</h3> */}
                <small> Free SHS</small>
              </div>
            </div>
            <div className="box">
              <FaHandsHelping />
              <div className="content">
                {/* <h3>365</h3> */}
                <small>Political Change</small>
              </div>
            </div>
            <div className="box">
              <GiHazardSign />
              <div className="content">
                {/* <h3>365</h3> */}
                <small>Environmental Degradation</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForegroundBanner;
