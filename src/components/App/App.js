import React, { Component } from "react";
import "./App.css";
import Select from "../Select/Select";
import Puzzle from "../Puzzle/Puzzle";

class App extends Component {
  constructor() {
    super();
    this.state = {
      game: "select", // or "loading" or "active"
      puzzle: null // or title of puzzle
    };
  }

  selectPuzzle = title => {
    console.log(title);
    this.setState({
      game: "active",
      puzzle: title
    });
  };

  render() {
    const { game } = this.state;

    if (game === "select") {
      return (
        <div className="select" style={{ textAlign: "center" }}>
          <h1>Artwork Slide Puzzles</h1>
          <h2>Select your puzzle</h2>
          <Select onSelect={this.selectPuzzle} />
        </div>
      );
    }

    if (game === "loading") {
      return "Loading";
    }

    if (game === "active") {
      return (
        <div className="puzzle">
          <Puzzle />
        </div>
      );
    }

    return "error";
  }
}

export default App;
