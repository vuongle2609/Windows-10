import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/fontawesome.css";
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
