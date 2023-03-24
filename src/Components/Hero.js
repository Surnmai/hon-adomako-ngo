import React from "react";

// import components
import Button from "../Components/Global/Button";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h3>
            Discover our world of knowledge, culture and idea and stay connected
          </h3>
          <Button name="read more" path="/about" />
        </div>
      </section>
    </>
  );
};

export default Hero;
