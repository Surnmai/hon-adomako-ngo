import React from "react";

const TopBanner = ({ img, title, text }) => {
  return (
    <>
      <section className="topBanner">
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="content">
          <h4>{title}</h4>
          <h2>{text}</h2>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
