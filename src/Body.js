import { useContext, useEffect, useState } from 'react';
import DATA from '../src/assets/data.json';
import RestaurantCard from './component/RestaurantCard';
import ShimmerUI from './component/shimmerUI';
import { SearchContext } from './SearchContext';

// Body component
const Body = () => {
  const { searchText } = useContext(SearchContext);
  const [restaurants, setRestaurants] = useState(DATA);

  const filteredData = DATA.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filteredData.length === 0) {
    return <h1>No Resraurants found...</h1>
  }

  return restaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      {filteredData.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
  );
};

export default Body;
