import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useMemo, useCallback } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchText);

  const handleBtnClick = useCallback(() => {
    if (isFiltered) {
      setList(originalList);
    } else {
      const filteredList = originalList.filter(
        (res) => res.info.avgRating > 4.3
      );
      setList(filteredList);
    }
    setIsFiltered((prevState) => !prevState);
  }, [isFiltered, originalList]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const response = await data.json();
    const restaurants =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setOriginalList(restaurants);
    setList(restaurants);
  };

  // Debouncing effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchText);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Memoizing the filtered restaurants based on debounced search term
  const filteredRestaurants = useMemo(() => {
    if (debouncedSearchTerm.trim() === "") {
      return originalList;
    }
    return originalList.filter((res) =>
      res.info.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, originalList]);

  // Update list based on filtered results
  useEffect(() => {
    setList(filteredRestaurants);
  }, [filteredRestaurants]);

  const clearSearchInput = () => {
    setSearchText("");
    setList(originalList);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={clearSearchInput} className="clear-btn">
            Clear
          </button>
        </div>
        <button className="filter-btn" onClick={handleBtnClick}>
          {isFiltered
            ? "Show All Restaurants"
            : "4.3* & Above Rated Restaurants"}
        </button>
      </div>
      {list.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {list.map((res) => (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
