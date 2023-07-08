import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LOGOURL } from './component/config';

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
const RestaurantCard = () => (
  <div className="restaurant-card">
    <img
      src="https://b.zmtcdn.com/data/pictures/chains/5/19748365/c3cc93d05fdd7d2a1cfa3aa91f917fff_o2_featured_v2.jpg?output-format=webp"
      alt="restaurantPic"
      className="restaurant-card-image"
    />
    <h3 className="restaurant-card-title">Winners Pizza - Fresh dough</h3>
    <h4 className="restaurant-card-category">Pizza, Italian, Dessert</h4>
    <h3 className="restaurant-card-rating">Rating 3.3</h3>
  </div>
);

// Body component
const Body = () => (
  <div className="body">
    <RestaurantCard />
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
