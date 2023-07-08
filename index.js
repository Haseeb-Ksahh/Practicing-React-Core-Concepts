import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LOGOURL } from './component/config';
import DATA from './component/data.json'

// Logo component
const Logo = () => (
  <img src={LOGOURL} alt="zomatoLogo" className="logo" />
);

// Header component
function Header() {
  const [searchText, setSearchText] = useState('');

  // Event handler for search input change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

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
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

// RestaurantCard component
const RestaurantCard = ({ name, cuisines, totalRatingsString, cloudinaryImageId }) => {

  return (<div className="restaurant-card">
    <img
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
      className="restaurant-card-image"
    />
    <h3 className="restaurant-card-title">{name}</h3>
    <h4 className="restaurant-card-category">{cuisines.join(", ")}</h4>
    <h3 className="restaurant-card-rating">{totalRatingsString}</h3>
  </div>)
}

// Body component
const Body = () => (
  <div className="body">
    {
      DATA.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />
      })
    }
  </div>
);

// Footer component
const Footer = () => <h4 className="footer">Footer</h4>;

// AppLayout component
const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

// Render the AppLayout component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
