import React from "react";
import PropTypes from "prop-types";
import Row from "../Row/Row";
import Space from "../Space/Space";

const Grid = ({ numRows, numCols, Pieces }) => {
  let index = 0;
  let pieces = Array.from(Pieces);

  const Rows = Array(numRows).fill(null);

  const FilledRows = Rows.map((space, rowIndex) => {
    const lastRow = rowIndex === Rows.length - 1;
    const children = lastRow
      ? [
          ...pieces.slice(index, index + numCols - 1),
          <Space index={index} key={index + 1} />
        ]
      : pieces.slice(index, index + numCols);

    let row = <Row key={rowIndex}>{children}</Row>;
    index += numCols;

    return row;
  });

  return <div className="grid">{FilledRows}</div>;
};

export default Grid;

Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
  Pieces: PropTypes.arrayOf(PropTypes.node).isRequired
};
