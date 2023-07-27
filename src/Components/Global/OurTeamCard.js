import React from "react";

const OurTeamCard = ({ array }) => {
  return (
    <>
      <h3 className="title">Meet our team</h3>
      <div className="container">
        {array.map((team, index) => {
          const { image, name, title, text } = team;
          return (
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
