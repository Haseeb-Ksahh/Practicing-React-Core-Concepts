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

export default RestaurantCard;