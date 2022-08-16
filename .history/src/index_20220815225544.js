import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router }

ReactDOM.hydrate(
  <App />,
  document.querySelector("#root")
);