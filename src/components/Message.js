import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
  render() {
    return (
      <div className="helloWorldContainer">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
