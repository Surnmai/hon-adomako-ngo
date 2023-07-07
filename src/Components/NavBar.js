import React from "react";

// import icons
import {
  FaBars,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

// import logo icons
import Logo from "../images/logo1.jpg";
// import { FcHeatMap } from "react-icons/fc";

// import react router
import { Link } from "react-router-dom";

// import data
import { navLinks } from "../data";

// import components
import NavLinks from "./Global/NavLinks";
import Button from "./Global/Button";

// import context API
import { useGlobalContext } from "../context";

const NavBar = () => {
  const { menuBar, setMenuBar, closeMenuBar } = useGlobalContext();
  // console.log(menuBar);
  return (
    <>
      <header>
        <Link to={navLinks[0].path} onClick={() => closeMenuBar()}>
          {/* <FcHeatMap /> */}
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        <NavLinks />

        <div className="icons">
          <button onClick={() => setMenuBar(!menuBar)}>
            {menuBar ? <FaTimes id="menu-bars" /> : <FaBars id="menu-bars" />}
          </button>
          {/* <Link to="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
            <FaFacebookSquare className="social-icons" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className="social-icons" />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <FaLinkedin className="social-icons" />
          </Link> */}

          <Button
            name={"Donate"}
            path={"https://paystack.com/gh/countries?q=/countries"}
          />
        </div>
      </header>
    </>
  );
};

export default NavBar;
