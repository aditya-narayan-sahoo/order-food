import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/resData";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resList);
  const [isFiltered, setIsFiltered] = useState(false);
  const handleBtnClick = () => {
    if (isFiltered) {
      setList(resList);
    } else {
      const filteredList = resList.filter((res) => res.info.avgRating > 4.2);
      setList(filteredList);
    }
    setIsFiltered((prevState) => !prevState);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleBtnClick}>
          {isFiltered ? "All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {list.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
