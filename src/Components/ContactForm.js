import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact-form">
        <form action="">
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
      <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0740782144985!2d-0.2031113249387216!3d5.556037733649162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf909be3522d8d%3A0x83ecc364da8102c4!2sWorld%20Trade%20Center%2C%20Accra!5e0!3m2!1sen!2sgh!4v1680692130939!5m2!1sen!2sgh"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactForm;
