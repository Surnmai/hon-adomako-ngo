import React, { useState, useContext, useEffect } from "react";

// import data
// import { recentProjects } from "./data";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);

  const closeMenuBar = () => {
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
    <AppContext.Provider value={{ menuBar, setMenuBar, closeMenuBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
