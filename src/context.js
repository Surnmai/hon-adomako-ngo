import React, { useState, useContext, useEffect, createContext } from "react";

// import data
// import { recentProjects } from "./data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);

  const closeMenuBar = () => {
    setMenuBar(false);
  };
  const isOpened = () => {
    setMenuBar(true);
  };
  const isClosed = () => {
    setMenuBar(false);
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
      value={{ menuBar, setMenuBar, closeMenuBar, isOpened, isClosed }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
