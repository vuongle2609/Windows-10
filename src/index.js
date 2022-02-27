import React from "react";
import ReactDOM from "react-dom";
import "./css/fontawesome.css";
import "./css/index.css";
import "./css/responsive.css";
import "./css/font.css"
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
