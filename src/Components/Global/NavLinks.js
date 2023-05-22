import React, { useRef, useEffect } from "react";

// import data
import { navLinks } from "../../data";

// import react router
import { NavLink } from "react-router-dom";

// import Context API
import { useGlobalContext } from "../../context";

const NavLinks = () => {
  const { menuBar, closeMenuBar } = useGlobalContext();
  const menuRef = useRef(null);
  // console.log(menuRef.current);

  // react code to close navbar menu on window scroll and click
  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenuBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenuBar, menuRef]);

  return (
    <>
      <nav ref={menuRef} className={`${menuBar ? "nav active" : "nav "}`}>
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
