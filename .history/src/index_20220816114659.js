import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.hydrate(
  <React.StrictMode></React.StrictMode>
  <Router>
    <App />
  </Router>,
  document.getElementById("root"));