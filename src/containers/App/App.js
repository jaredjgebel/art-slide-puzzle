import React, { Component } from "react";
import "./App.css";
import Select from "../../components/Select/Select";
import PuzzleProvider, {
  PuzzleContext
} from "../PuzzleProvider/PuzzleProvider";
import GridProvider from "../GridProvider/GridProvider";
import Grid from "../../components/Grid/Grid";
import MenuBar from "../../components/MenuBar/MenuBar";
import { puzzles } from "../../data/puzzles.json";
import "./App.css";

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
        <PuzzleProvider title={puzzle.title} puzzle={puzzle}>
          <PuzzleContext.Consumer>
            {({ rows, columns, height, width, images }) => (
              <GridProvider
                rows={rows}
                columns={columns}
                height={height}
                width={width}
                images={images}
              >
                <div className="body">
                  <Grid />
                  <MenuBar
                    artist={puzzle.artist}
                    title={puzzle.title}
                    year={puzzle.year}
                    backToSelect={this.backToSelect}
                  />
                </div>
              </GridProvider>
            )}
          </PuzzleContext.Consumer>
        </PuzzleProvider>
      );
    }

    return "error";
  }
}

export default App;
