import React, { Component } from "react";
import OliveTrees from "../../images/optimized/olive-trees.jpg";
import "./App.css";
import Splitter from "../Splitter/Splitter";
import Puzzle from "../Puzzle/Puzzle";

class App extends Component {
  render() {
    return (
      <div className="all">
        <Puzzle />
        {/* <Splitter img={OliveTrees} width={900} /> */}
      </div>
    );
  }
}

export default App;
