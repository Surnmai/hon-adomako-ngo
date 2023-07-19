import React from "react";

// import image
import Image from "../images/contact2.jpg";

// import component
import TopBanner from "../Components/Global/TopBanner";
import ContactForm from "../Components/ContactForm";

// import Helmet
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Aiperdlbg - Contact</title>
        <meta name="description" content="Contact Aiperdlbg " />
      </Helmet>
      <TopBanner img={Image} title="contact" text="get in touch" />
      <ContactForm />
    </>
  );
};

export default Contact;
