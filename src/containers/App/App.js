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
      puzzle: {},
      complete: false
    };
  }

  selectPuzzle = title => {
    const [puzzle] = puzzles.filter(puzzle => title === puzzle.folder);

    this.setState({
      ...this.state,
      game: "active",
      title,
      puzzle
    });
  };

  backToSelect = () => {
    this.setState({
      ...this.state,
      game: "select",
      title: null,
      puzzle: {},
      complete: false
    });
  };

  setPuzzleComplete = bool => {
    this.setState({
      ...this.state,
      complete: bool
    });
  };

  render() {
    const { game, puzzle, complete } = this.state;

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
                setPuzzleComplete={this.setPuzzleComplete}
              >
                <div className="body">
                  <Grid />
                  {complete ? (
                    <p className="puzzle-complete">
                      You completed the puzzle! I laud you for your patience and
                      wit.
                    </p>
                  ) : null}
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
