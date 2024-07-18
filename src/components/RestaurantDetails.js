import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer"

const RestaurantDetails = () =>{
  const { id } = useParams()
  const[menu, setMenu] = useState(null);

  useEffect(()=>{
    RestaurantDetails()
  }, []);

  async function RestaurantDetails(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2708997&lng=78.00167309999999&restaurantId=" +
        id
    );
    const json = await data.json();
    const menuData = json?.data?.cards[2]?.card?.card?.info;
    console.log(menuData);
    setMenu(menuData);
  }

  if(!menu){
    return <Shimmer/>
  }
  return (
    <>
      <h2>Order Now!!! from your favorite restaurant</h2>
      <h2>restro: {id}</h2>
      <h3>{menu.name}</h3>
      <p>{menu.cuisines.join(" , ")}</p>
      <img alt="food-image" src={IMG_CDN_URL + menu.cloudinaryImageId}></img>
      <h4>{menu.avgRating} stars</h4>
      <h4>{menu.costForTwoMessage}</h4>
    </>
  );
}

export default RestaurantDetails