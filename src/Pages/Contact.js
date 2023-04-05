import React from "react";

// import image
import Image from "../images/contact2.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      <TopBanner img={Image} title="contact" text="get in touch" />
      <ContactForm />
    </>
  );
};

export default Contact;
