import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./components/store/cartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contextprovider>
);
