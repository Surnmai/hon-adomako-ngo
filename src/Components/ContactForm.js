// import React, { useEffect, useState } from "react";
import React from "react";

// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.send(
    //   "service_beg0bxi",
    //   "template_0xcinwa",
    //   values,
    //   "z1hBtHGueVE0dPugc"
    // );
    // setAlert(!alert);
  };

  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   number: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // console.log(name, value);
  //   setValues({ ...values, [name]: value });
  // };

  //   useEffect(() => {
  //     if (alert) {
  //       setTimeout(() => {}, 5000);
  //     }
  //   }, []);

  return (
    <>
      <section className="contact-form">
        <form action="" onSubmit={handleSubmit}>
          <p>
            Email us with any questions or inquiries and we would be happy to
            answer your questions and assist you
          </p>
          <div className="inputField">
            <input
              type="text"
              placeholder="Full name"
              className="inputText"
              required
              name="fullname"
              // value={values.fullname}
              // onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <input
              type="email"
              placeholder="email"
              className="inputText"
              required
              name="email"
              // value={values.email}
              // onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <input
              type="tel "
              placeholder="(+233) 0244039294"
              className="inputText"
              required
              name="number"
              // value={values.number}
              // onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <textarea
              type="text"
              placeholder="Message"
              className="inputText"
              required
              name="message"
              cols="3"
              rows="5"
              // value={values.message}
              // onChange={handleChange}
            ></textarea>
          </div>
          <div className="alert">
            <small>Message successfully sent</small>
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
          </div>
        </form>
      </section>
      {/* <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0740782144985!2d-0.2031113249387216!3d5.556037733649162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf909be3522d8d%3A0x83ecc364da8102c4!2sWorld%20Trade%20Center%2C%20Accra!5e0!3m2!1sen!2sgh!4v1680692130939!5m2!1sen!2sgh"
        loading="lazy"
      ></iframe> */}
      {/* <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.5354854278264!2d-0.2580362059122439!3d5.603855641899691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9900a6c2453f%3A0xef3ab82d9b2175ff!2sTimeless%20Links%20Restaurant!5e1!3m2!1sen!2sgh!4v1686839102516!5m2!1sen!2sgh"
        loading="lazy"
      ></iframe> */}

      <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.4928244551868!2d-0.25841739228872873!3d5.60449512051223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9900a6c2453f%3A0xef3ab82d9b2175ff!2sTimeless%20Links%20Restaurant!5e0!3m2!1sen!2sgh!4v1686839324341!5m2!1sen!2sgh"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactForm;
