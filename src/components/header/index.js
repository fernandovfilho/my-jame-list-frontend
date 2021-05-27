import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

export function Header() {
  return (
    <div className="container">
      <div className="logo" />
      <form action="#">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            id="search"
            name="search"
          />
          <FontAwesomeIcon className="search-input-icon" icon={faSearch} />
        </div>
      </form>
    </div>
  );
}
