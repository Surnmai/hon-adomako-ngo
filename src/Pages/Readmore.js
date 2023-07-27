import React from "react";

// import react router
import { useParams } from "react-router-dom";

// import dat
import { recentProjects } from "../data";

// import Helmet
import { Helmet } from "react-helmet";

const Readmore = () => {
  const { id } = useParams();
  const readMore = recentProjects.find((recent) => recent.id === id);

  const { text, detailedText, image, title } = readMore;

  return (
    <>
      <Helmet>
        <title data-rh="true">Aiperdlbg - {title}</title>
        <meta name="description" content={text} />
      </Helmet>
      <section className="readMore">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <article className="summary">{text}</article>
        <article>{detailedText}</article>
      </section>
    </>
  );
};

export default Readmore;
