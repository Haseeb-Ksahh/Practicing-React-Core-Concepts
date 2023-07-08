import { useEffect, useState } from 'react';
import DATA from './config/data.json';
import RestaurantCard from './RestaurantCard';

// Body component
const Body = ({ searchText }) => {
  const [restaurants, setRestaurants] = useState(DATA);

  useEffect(() => {
    const filtered = DATA.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filtered);
  }, [searchText]);

  return (
    <div className="body">
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
  );
};

export default Body;
