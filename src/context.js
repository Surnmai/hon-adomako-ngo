import React, { useState, useContext, useEffect, createContext } from "react";

// import data
// import { recentProjects } from "./data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);
  const [opened, setOpened] = useState(false);

  const closeMenuBar = () => {
    setMenuBar(false);
  };
  const isOpened = () => {
    setOpened(true);
    console.log("Hello");
  };
  const isClosed = () => {
    setOpened(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      isClosed();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ menuBar, setMenuBar, closeMenuBar, isOpened, isClosed, opened }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
