import React from "react";

// import image
import Image from "../images/contact2.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";

const Contact = () => {
  return (
    <>
      <TopBanner img={Image} title="contact" text="get in touch" />
    </>
  );
};

export default Contact;
