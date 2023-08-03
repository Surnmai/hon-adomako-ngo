import React from "react";

// import icon
// import { FcHeatMap } from "react-icons/fc";

// import data
import { navLinks } from "../data";

//Component to display copyright symbol and current year
// import CopyrightYear from "react-copyright-year";

// Import Component
import NavLinks from "./Global/NavLinks";

// import react router
import { Link } from "react-router-dom";

// import logo icons
import Logo from "../images/logo1.jpg";

// import icons
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Button from "./Global/Button";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="box">
            <div className="logo-socials">
              {/* <FcHeatMap className="logo" /> */}
              <Link to={navLinks[0].path}>
                {/* <FcHeatMap /> */}
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
              <div className="socials">
                <Link
                  to="https://web.facebook.com/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <FaFacebookSquare className="social-icons" />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FaInstagramSquare className="social-icons" />
                </Link>
                <Link to="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="social-icons" />
                </Link>
              </div>
              <Button
                name={"Donate"}
                path={"https://paystack.com/gh/countries?q=/countries"}
                target={"_blank"}
              />
            </div>
          </div>
          <div className="box">
            <div className="links">
              <NavLinks />
            </div>
          </div>
          <div className="box">
            <div className="address">
              <p>address: </p>
              <p>P.O. Box Nii Oworsika Road, </p>
              <p>Tabora Accra, GA-464-5136</p>
            </div>
            <div className="phone">
              <p>phone: </p>
              <p>(+233) 0200757774</p>
            </div>
            <div className="email">
              <p>email: </p>
              <p className="mail">admin@aiperdlbg.org</p>
            </div>
          </div>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Aiperdlbg | By nmaitech@outlook.com
        </p>
      </footer>
    </>
  );
};

export default Footer;
