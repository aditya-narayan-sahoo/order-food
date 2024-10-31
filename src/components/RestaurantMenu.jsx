import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
    <div className="font-sans p-5 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{name}</h1>
        <p className="text-sm text-gray-600 mb-1">{costForTwoMessage}</p>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
      </div>
      <ul className="list-none p-0">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between border-b p-2 border-gray-200 last:border-b-0"
          >
            <span className="text-md text-gray-600 mr-3">
              {item.card.info.name}
            </span>
            <span className="text-base text-orange-600">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
