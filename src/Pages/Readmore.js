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

  const { text, detailedText, image, title, more } = readMore;
  // const {
  //   title1,
  //   title2,
  //   title3,
  //   title4,
  //   title5,
  //   title6,
  //   content1,
  //   content2,
  //   content3,
  //   content4,
  //   content5,
  //   content6,
  // } = more;

  console.log(more);

  return (
    <>
      <Helmet>
        <title data-rh="true">Aiperdlbg - {title}</title>
        <meta name="description" content={text} />
      </Helmet>
      <section className="readMore">
        <div className="img">
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <article className="summary">{text}</article>
        <article>{detailedText}</article>

        <h1>{more?.title1}</h1>
        <article>{more?.content1}</article>

        <h1>{more?.title2}</h1>
        <article>{more?.content2}</article>

        <h1>{more?.title3}</h1>
        <article>{more?.content3}</article>

        <h1>{more?.title4}</h1>
        <article>{more?.content4}</article>

        <h1>{more?.title5}</h1>
        <article>{more?.content5}</article>

        <h1>{more?.title6}</h1>
        <article>{more?.content6}</article>
      </section>
    </>
  );
};

export default Readmore;
