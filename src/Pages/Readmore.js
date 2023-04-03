import React from "react";

// import react router
import { useParams } from "react-router-dom";

// import dat
import { recentProjects } from "../data";

const Readmore = () => {
  const { id } = useParams();
  const readMore = recentProjects.find((recent) => recent.id === id);

  const { detailedText, image, title } = readMore;
  return (
    <>
      <section>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{detailedText}</p>
      </section>
    </>
  );
};

export default Readmore;
