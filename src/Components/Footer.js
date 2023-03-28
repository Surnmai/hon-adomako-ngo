import React from "react";

// import component
import NavLinks from "./Global/NavLinks";

//Component to display copyright symbol and current year
import CopyrightYear from "react-copyright-year";

const Footer = () => {
  return (
    <>
      <footer>
        <NavLinks />

        <p className="copyright">
          copyright <CopyrightYear />
        </p>
        {/* <p className="copyright">copyright &copy; {new Date().getFullYear()}</p> */}
      </footer>
    </>
  );
};

export default Footer;
