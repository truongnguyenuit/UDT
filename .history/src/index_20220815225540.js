import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as R}

ReactDOM.hydrate(
  <App />,
  document.querySelector("#root")
);