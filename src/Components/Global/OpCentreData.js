import React from "react";

const OpCentreData = ({ bold, text1, text2, text3, text4, text5, article }) => {
  return (
    <>
      <section className="about-us-card-section">
        <div className="about-us-card">
          <h3>{bold}</h3>
          <article>{article}</article>
          <ul>
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OpCentreData;
