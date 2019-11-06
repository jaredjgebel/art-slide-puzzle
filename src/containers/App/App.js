import React, { Component } from "react";
import "./App.css";
import Select from "../../components/Select/Select";
import PuzzleContainer from "../PuzzleContainer/PuzzleContainer";
import { puzzles } from "../../data/puzzles.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      game: "select", // or "loading" or "active"
      title: null, // or title of puzzle
      puzzle: {}
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

  backToSelect = () => {
    this.setState({
      game: "select",
      title: null,
      puzzle: {}
    });
  };

  render() {
    const { game, puzzle } = this.state;

    if (game === "select") {
      return <Select onSelect={this.selectPuzzle} />;
    }

    if (game === "loading") {
      return "Loading";
    }

    if (game === "active") {
      return (
        <PuzzleContainer puzzle={puzzle} backToSelect={this.backToSelect} />
      );
    }

    return "error";
  }
}

export default App;
