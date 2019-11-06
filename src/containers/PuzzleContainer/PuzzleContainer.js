import React from "react";
import PropTypes from "prop-types";
import PuzzleProvider, {
  PuzzleContext
} from "../PuzzleProvider/PuzzleProvider";
import GridProvider from "../GridProvider/GridProvider";
import Grid from "../../components/Grid/Grid";
import "./PuzzleContainer.css";
import MenuBar from "../../components/MenuBar/MenuBar";

const PuzzleContainer = ({ puzzle, backToSelect }) => (
  <main className="body">
    <PuzzleProvider title={puzzle.title} puzzle={puzzle}>
      <PuzzleContext.Consumer>
        {({ rows, columns, images, height, width }) => (
          <GridProvider
            rows={rows}
            columns={columns}
            images={images}
            height={height}
            width={width}
          >
            <Grid />
            <MenuBar
              artist={puzzle.artist}
              title={puzzle.title}
              year={puzzle.year}
              backToSelect={backToSelect}
            />
          </GridProvider>
        )}
      </PuzzleContext.Consumer>
    </PuzzleProvider>
  </main>
);

export default PuzzleContainer;
