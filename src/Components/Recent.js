import React from "react";

// import react router
import { Link } from "react-router-dom";

// import data
import { recentProjects } from "../data";

const Recent = () => {
  return (
    <>
      <section className="recent">
        <div className="container">
          {recentProjects.map((recent, index) => {
            const { image, icon, time, title, text, readMore } = recent;
            return (
              <div className="box" key={index}>
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  {" "}
                  <div className="time">
                    {icon} <p>{time}</p>
                  </div>
                  <h3 className="title">{title}</h3>
                  <article>{text}</article>
                  <Link to="/readmore">{readMore}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Recent;
