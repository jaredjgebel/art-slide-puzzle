import React from "react";
import ReactDOM from "react-dom";
import flatten from "lodash.flatten";
import xor from "lodash.xor";
import Puzzle, {
  generate2DArray,
  shuffle2DArray,
  compareMaps,
  processMove,
  generatePieces
} from "./Puzzle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Puzzle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Puzzle logic", () => {
  it("generates a 2D Array given rows and columns, filled with an ascending counter variable", () => {
    const first = generate2DArray(3, 4);
    expect(first).toHaveLength(3);
    expect(first[0]).toHaveLength(4);
    expect(first[1][2]).toBe(7);
    expect(first[2][3]).toBe(12);
  });

  it("shuffles a 2D array", () => {
    const arr = generate2DArray(4, 5);
    const shuffled = shuffle2DArray(arr);

    expect(shuffled).toHaveLength(4);
    expect(shuffled[3]).toHaveLength(5);

    // both sets match in numbers
    expect(xor(flatten(arr), flatten(shuffled))).toHaveLength(0);
  });

  it("compares answer map and current board map to check if puzzle is solved", () => {
    const compare1 = compareMaps(
      [[1, 2, 3], [4, 5, 6]],
      [[1, 2, 3], [4, 5, 6]]
    );
    expect(compare1).toBeTruthy();

    const compare2 = compareMaps(
      [[1, 2, 3], [4, 5, 6]],
      [[1, 2, 3], [5, 6, 4]]
    );
    expect(compare2).toBeFalsy();
  });

  it("processes each move by taking in a map array and generating a new map array", () => {
    const intArray = [[1, 2, 3], [4, 5, 6], [7, 9, 8]];
    const newMap = processMove(intArray, 8, 9);

    const expectedMap = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    expect(compareMaps(newMap, expectedMap)).toBeTruthy();

    const intArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const newMap2 = processMove(intArray2, 6, 9);

    const expectedMap2 = [[1, 2, 3], [4, 5, 9], [7, 8, 6]];

    expect(compareMaps(newMap2, expectedMap2)).toBeTruthy();
  });

  describe("Rendering", () => {
    it("")
  })
});
