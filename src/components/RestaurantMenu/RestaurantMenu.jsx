import "./restaurantmenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
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
