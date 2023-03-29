import React from "react";

const TopBanner = ({ img, title, text }) => {
  return (
    <>
      <section className="topBanner">
        <img src={img} alt={title} />

        <div className="content">
          <h4>{title}</h4>
          <h2>{text}</h2>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
