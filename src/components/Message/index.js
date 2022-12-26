import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default class Message extends React.Component {
  constructor(props) {
    console.log("Message::constructor");
    super(props);
    this.handleCreateArtist = this.handleCreateArtist.bind(this);
  }
  reloadData() {
    console.log("Message::reloadData");
    this.setState({ isLoading: true });
    let headers = { "Content-Type": "application/json", "Accept": "application/json" }

    let options = {};
    options.method = "GET";
    options.headers = headers;

    fetch("http://localhost:3000/artists", options)
      .then(response => {
        console.log('status code: ', response.status); // 👉️ 200

        return response.json();
      })
      .then(json => {
        console.log(JSON.stringify(json));
        this.setState({ artists: json });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, isLoading: false });
      });
  }

  componentWillMount() {
    console.log("Message::componentWillMount");
    this.reloadData();
  }

  handleCreateArtist() {
    console.log("Message::handleCreateArtist");
    let headers = { "Content-Type": "application/json" }
    let options = {};
    options.method = "POST";
    options.headers = headers;
    options.body = JSON.stringify({ name: "Metallica" });
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/artists", options)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(JSON.stringify(json));
        this.setState({ isLoading: false });
        this.reloadData();
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, isLoading: false });
      });
  }
  render() {
    return (
      <div className="container">
        <p>Props: text: {this.props.text}</p>
        <p>Data: {JSON.stringify(this.state.artists)}</p>
        <p>Error: {JSON.stringify(this.state.error)}</p>
        <p>isLoading: {JSON.stringify(this.state.isLoading)}</p>
        <button onClick={this.handleCreateArtist}>Create</button>
      </div>
    );
  }
}
