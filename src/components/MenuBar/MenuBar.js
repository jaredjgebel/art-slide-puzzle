import React from "react";
import PropTypes from "prop-types";
import { GridContext } from "../../containers/GridProvider/GridProvider";
import "./MenuBar.css";

const MenuBar = ({ title, artist, year, backToSelect }) => (
  <div className="menubar-container">
    <div className="menubar">
      <div className="back">
        <svg
          className="back-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={backToSelect}
        >
          <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z" />
        </svg>
      </div>
      <div className="info">
        <i className="title">{title}</i>
        <span>{artist}</span>
        <span>{year}</span>
      </div>
      <nav className="refresh">
        <GridContext.Consumer>
          {({ pieceMap, shuffle2DArray }) => (
            <svg
              className="refresh-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => shuffle2DArray(pieceMap)}
            >
              <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
            </svg>
          )}
        </GridContext.Consumer>
      </nav>
    </div>
  </div>
);

export default MenuBar;

MenuBar.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.string
};
