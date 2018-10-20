import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default class Message extends React.Component {
  render() {
    return (
      <div className="container">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
