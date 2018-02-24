import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <Message text="Hello World!" />,
  document.getElementById("app")
);
