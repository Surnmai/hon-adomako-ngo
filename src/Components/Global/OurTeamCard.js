import React from "react";

// import Context
import { useGlobalContext } from "../../context";

// import components
import Modal from "../Modal";

// import OurTeamData
import { ourteamAll } from "../../data";

const OurTeamCard = ({ array }) => {
  const { openModal, opened } = useGlobalContext();
  return (
    <>
      <h3 className="title">Meet our team</h3>
      <div className="container">
        {array.map((team, index) => {
          const { image, name, title } = team;
          return (
            // onclick event to execute a modal
            <div className="box" key={index} onClick={() => openModal()}>
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{name}</p>
                <h3 className="title">{title}</h3>
                {/* <article>{text}</article> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* {ourteamAll.map((team) => {
        // console.log(team);
        return <Modal {...team} />;
      })} */}
      {/* {opened && <Modal />} */}
    </>
  );
};

export default OurTeamCard;
