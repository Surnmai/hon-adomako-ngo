import React, { useRef } from "react";

// import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import EmailJs
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // const notify = () => toast("Email successfully sent");
  const notify = () =>
    toast.success("Email successfully sent", {
      theme: "dark",
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94uxdo2",
        "template_sjyu1sp",
        form.current,
        "beMyP5zxvFtmY7ODa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    notify();
  };

  return (
    <>
      <section className="contact-form">
        <form ref={form} action="" onSubmit={handleSubmit}>
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
              name="full_name"
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
            />
          </div>

          <div className="inputField">
            <input
              type="tel "
              placeholder="(+233) 0244039294"
              className="inputText"
              required
              name="number"
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
            ></textarea>
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </section>
      S
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
