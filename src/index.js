import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

// import context API
import { AppContextProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HelmetProvider>
);
