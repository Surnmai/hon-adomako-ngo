import React, { useState, useContext, useEffect, createContext } from "react";

// import data
// import { recentProjects } from "./data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);
  const [opened, setOpened] = useState(false);
  const [popupcontent, setPopupcontent] = useState([]);
  // const [onModalScroll, setOnModalScroll] = useState(null);

  const closeMenuBar = () => {
    setMenuBar(false);
  };
  const openModal = () => {
    setOpened(true);
    // console.log("Hello");
  };
  const closeModal = () => {
    setOpened(false);
  };

  const changeContent = (team) => {
    setPopupcontent([team]);
    setOpened(!opened);

    // if (onModalScroll === null) {
    //   setOnModalScroll({ position: "fixed" });
    // } else {
    //   setOnModalScroll(null);
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      closeMenuBar();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        menuBar,
        setMenuBar,
        closeMenuBar,
        openModal,
        closeModal,
        opened,
        popupcontent,
        setPopupcontent,
        changeContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
