import React, { Component } from "react";
import "./App.css";
import Select from "../../components/Select/Select";
import Puzzle from "../../components/Puzzle/Puzzle";
import PuzzleProvider from "../PuzzleProvider/PuzzleProvider";
import { puzzles } from "../../data/puzzles.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      game: "select", // or "loading" or "active"
      title: null, // or title of puzzle
      puzzle: {} // puzzle object
    };
  }

  selectPuzzle = title => {
    const [puzzle] = puzzles.filter(puzzle => title === puzzle.folder);

    this.setState({
      game: "active",
      title,
      puzzle
    });
  };

  render() {
    const { game, title, puzzle } = this.state;

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
        <div className="body">
          <div className="puzzle">
            <PuzzleProvider title={title} puzzle={puzzle}>
              <Puzzle />
            </PuzzleProvider>
          </div>
        </div>
      );
    }

    return "error";
  }
}

export default App;
