import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalContextProvider } from "./contexts/GlobalContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <GlobalContextProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </GlobalContextProvider>
);
