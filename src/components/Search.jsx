import React from "react";
import search from "../assets/search.svg";

function Search({ seartchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search for movies"
          value={seartchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
