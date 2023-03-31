import React from "react";

// import data
import { navLinks } from "../../data";

// import react router
import { NavLink } from "react-router-dom";

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
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "links active" : "links"
                  }
                  onClick={() => closeMenuBar()}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
