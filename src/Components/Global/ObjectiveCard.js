import React from "react";

const Content = ({ bold, text1, text2, text3, text4, text5, article }) => {
  return (
    <>
      <h3>{bold}</h3>
      <article>{article}</article>
      <ol>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
        <li>{text5}</li>
      </ol>
    </>
  );
};

export default Content;
