import React from "react";

// import Context
import { useGlobalContext } from "../../context";

const OurTeamCard = ({ array }) => {
  // const {}
  return (
    <>
      <h3 className="title">Meet our team</h3>
      <div className="container">
        {array.map((team, index) => {
          const { image, name, title } = team;
          return (
            // onclick event to execute a modal
            <div className="box" key={index}>
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{name}</p>
                <h3 className="title">{title}</h3>
                {/* <article>{text}</article> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurTeamCard;
