import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { SearchContext } from "../SearchContext";

// Header component
function Header({ search }) {
  const {SearchText , handleSearch} = useContext(SearchContext)
  const [inputText, setinputText] = useState("");

  // Event handler for search input change
  const handleSearchChange = (e) => {
    setinputText(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(inputText);
  };

  return (
    <div className="header">
      <div className="navbar">
        <input
          type="text"
          onChange={handleSearchChange}
          value={inputText}
          className="search-input"
        />
        <button className="searchButton" onClick={handleSearchClick}>
          Search
        </button>

        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/restaurant/123">Restaurant Menu</Link>
          </li>
          <li>
            <Link to="/classcomponent">Anything</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
