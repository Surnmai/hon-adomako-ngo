import React, { useState, useContext } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <AppContext.Provider value={{ menuBar, setMenuBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
