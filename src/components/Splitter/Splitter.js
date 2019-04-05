import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./Splitter.css";

class Splitter extends Component {
  constructor(props) {
    super(props);
    this.image = props.img;
    this.width = props.width;
  }

  // split()

  render() {
    return (
      <div className="puzzle-board">
        <MediaQuery minDeviceWidth={this.width}>
          <img
            className="puzzle-image"
            src={this.image}
            alt="Puzzle"
            width="982px"
            height="779px"
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Splitter;
