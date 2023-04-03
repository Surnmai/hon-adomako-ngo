import React, { useState, useContext } from "react";

// import data
// import { recentProjects } from "./data";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);
  const closeMenuBar = () => {
    setMenuBar(false);
  };

  return (
    <AppContext.Provider value={{ menuBar, setMenuBar, closeMenuBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
