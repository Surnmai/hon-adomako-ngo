import React from "react";
// import react router
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section>
        <h2>404</h2>
        <h4>Error: page not found.</h4>
        <Link to="/" className="btn">
          Home
        </Link>
      </section>
    </>
  );
};

export default Error;
