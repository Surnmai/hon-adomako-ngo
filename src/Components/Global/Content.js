import React from "react";

const Content = ({ title, text }) => {
  return (
    <>
      <section className="about-us">
        <h3>{title}</h3>
        <article>{text}</article>
      </section>
    </>
  );
};

export default Content;
