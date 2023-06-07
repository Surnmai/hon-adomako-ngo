import React from "react";

// import react router
import { Link } from "react-router-dom";

const ResearchCard = ({ array, title }) => {
  return (
    <>
      <h3 className="title">{title}</h3>
      <div className="container">
        {array.map((recent) => {
          const { id, image, title, text, readMore } = recent;
          return (
            <div className="box" key={id}>
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                {/* <div className="time">
                  {icon} <p>{time}</p>
                </div> */}
                <h3 className="title">{title}</h3>
                <article>{text}</article>
                <Link className="link" to={`/readmore/${id}`}>
                  {readMore}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResearchCard;
