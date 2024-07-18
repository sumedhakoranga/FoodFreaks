import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"

const filterFunction = (searchText, restaurants) => {
  return restaurants.filter((restaurant) => {
    console.log(restaurants);
    return restaurant.info.name?.toLowerCase().includes(searchText);
  });
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  console.log("render");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2708997&lng=78.00167309999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilterRestaurants(restaurantData);
    setAllRestaurants(restaurantData);
    console.log(restaurantData);
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterFunction(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {filterRestaurants?.length === 0 ? (
          <h1>no restro</h1>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info}/>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
