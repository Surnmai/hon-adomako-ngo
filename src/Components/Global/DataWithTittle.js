import React from "react";

const DataWithTittle = ({ text, tittle }) => {
  return (
    <>
      <h3>{tittle}</h3>
      <article>{text}</article>
    </>
  );
};

export default DataWithTittle;
