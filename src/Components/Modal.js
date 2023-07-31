import React from "react";

// import icons
import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../context";

const Modal = ({ image, name, title, text }) => {
  const { closeModal } = useGlobalContext();
  return (
    <>
      <section className="modal" onClick={() => closeModal()}>
        <FaTimes className="closeBtn" onClick={() => closeModal()} />
        <div
          className="modal-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="img">
            <img src={image} alt={title} />
          </div>

          <div className="content">
            <h3 className="name">{name}</h3>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
