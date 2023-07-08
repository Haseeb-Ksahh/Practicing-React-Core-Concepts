import { useState } from "react";
import { LOGOURL } from "./config/config";


// Logo component
const Logo = () => (
  <img src={LOGOURL} alt="zomatoLogo" className="logo" />
);

// Header component
function Header({ search }) {

  const [searchText, setSearchText] = useState('');

  // Event handler for search input change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchclick = () => {
    search(searchText)
  }

  return (
    <div className="header">
      <Logo />
      <div className="navbar">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchText}
          className="search-input"
        />
        <button onClick={handleSearchclick}> Search </button>

        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
