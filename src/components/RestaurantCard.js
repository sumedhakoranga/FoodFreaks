import { IMG_CDN_URL } from "./constants"

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img alt="images" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>{avgRating} stars</p>
    </div>
  );
};

export default RestaurantCard;