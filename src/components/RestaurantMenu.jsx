import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  return (
    <div className="bg-gray-50 m-2 rounded">
      <h1 className="font-bold my-6 text-center text-2xl mb-2">
        {resInfo?.cards[2]?.card?.card?.info.name}
      </h1>
      <p className="font-bold text-center text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={`${category.id}-${index}`}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
