import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "./BrowserRouter";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
