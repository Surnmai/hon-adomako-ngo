import React from "react";

const Content = ({ title, text }) => {
  return (
    <>
      <section className="about-us">
        <h3>{title}</h3>

        {text.map((data, index) => {
          const { text } = data;
          return <article key={index}>{text}</article>;
        })}
      </section>
    </>
  );
};

export default Content;
