import React from "react";

// import data
import { navLinks } from "../../data";

// import react router
import { Link } from "react-router-dom";

// import Context API
import { useGlobalContext } from "../../context";

const NavLinks = () => {
  const { menuBar, closeMenuBar } = useGlobalContext();
  return (
    <>
      <nav className={`${menuBar ? "nav active" : "nav "}`}>
        <ul>
          {navLinks.map((link, index) => {
            const { text, path } = link;
            return (
              <li key={index}>
                <Link
                  to={path}
                  className="links"
                  onClick={() => closeMenuBar()}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
