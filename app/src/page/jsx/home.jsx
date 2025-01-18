import React, { useState } from "react";
import HomeHeader from "../../component/jsx/homeHeader.jsx";
import SearchInput from "../../component/jsx/searchInput.jsx";
import HomeCarousel from "../../component/jsx/homeCarousel.jsx";
import "../css/home.css";
export default function Home() {
  const [searchMode, setSearchMode] = useState(false); 

  return (
    <>
    <div className={`${searchMode ? "hide" : ""}`}>
      <HomeHeader />
    </div>
    <div className={`${searchMode ? "top" : ""}`}>
      <SearchInput setSearchMode={setSearchMode} />
    </div>
    <div className={`${searchMode ? "hide" : ""}`}>
      <HomeCarousel />
    </div>
    </>
  );
}