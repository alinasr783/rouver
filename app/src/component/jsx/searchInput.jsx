import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/searchInput.css";

export default function SearchInput({ setSearchMode }) {
  const [search, setSearch] = useState("");

  const handleSearchMode = () => {
    setSearchMode(true);
  };

  return (
    <>
      <div className="search-input">
        <div className="search-input-content">
          <div className="search-input-content-input">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search"
              onClick={handleSearchMode} 
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
          <div className="search-input-content-button">
            <i className="fa fa-sliders"></i>
          </div>
        </div>
      </div>
    </>
  );
}