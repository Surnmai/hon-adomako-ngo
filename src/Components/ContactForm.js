import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact-form">
        <form action="">
          <div className="inputField">
            <input
              type="text"
              placeholder="Full name"
              className="inputText"
              required
            />
          </div>

          <div className="inputField">
            <input
              type="email"
              placeholder="email"
              className="inputText"
              required
            />
          </div>

          <div className="inputField">
            <input
              type="tel "
              placeholder="(+233) 0244039294"
              className="inputText"
              required
            />
          </div>

          <div className="inputField">
            <textarea
              type="text"
              placeholder="Message"
              className="inputText"
              required
              cols="3"
              rows="5"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
