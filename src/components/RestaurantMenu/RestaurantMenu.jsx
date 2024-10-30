import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";
import "./restaurantmenu.css";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API_URL + resId);
        const response = await data.json();
        setResInfo(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
  console.log(itemCards);
  //   const categories =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  //       (c) =>
  //         c?.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //     ) || [];
  //   //console.log(categories);

  return (
    <div className="restaurant-menu">
      <div className="menu-header">
        <h1 className="restaurant-name">{name}</h1>
        <p className="cost-for-two">{costForTwoMessage}</p>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>
      <ul className="menu-list">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
