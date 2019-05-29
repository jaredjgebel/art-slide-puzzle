import flatten from "lodash.flatten";
import xor from "lodash.xor";
import isValidMove from "../../logic/isValidMove";
import compareMaps from "../logic/compareMaps";
import generate2DArray from "../logic/generate2DArray";
import processNewMove from "../logic/processNewMove";
import shuffle2DArray from "../logic/shuffle2DArray";

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
    const newMap = processNewMove(intArray, 8, 9);

    const expectedMap = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    expect(compareMaps(newMap, expectedMap)).toBeTruthy();

    const intArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const newMap2 = processNewMove(intArray2, 6, 9);

    const expectedMap2 = [[1, 2, 3], [4, 5, 9], [7, 8, 6]];

    expect(compareMaps(newMap2, expectedMap2)).toBeTruthy();
  });

  it("tests whether or not a given move is valid", () => {
    expect(isValidMove([0, 0], [0, 1])).toBeTruthy();
    expect(isValidMove([0, 0], [1, 0])).toBeTruthy();
    expect(isValidMove([0, 4], [1, 4])).toBeTruthy();
    expect(isValidMove([3, 4], [2, 4])).toBeTruthy();
    expect(isValidMove([4, 5], [2, 1])).toBeFalsy();
  });
});
