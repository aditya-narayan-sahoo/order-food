import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useMemo, useCallback } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";

const Body = () => {
  const { originalList, list, setList } = useRestaurantList();
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
  }, [isFiltered, originalList, setList]);

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
  }, [filteredRestaurants, setList]);

  const clearSearchInput = () => {
    setSearchText("");
    setList(originalList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <Error />;

  return (
    <div className="font-sans">
      <div className="p-5 mx-auto flex justify-center flex-col md:flex-row">
        <div className="flex items-center mb-4 md:mb-0">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md text-base w-full md:w-64 transition-colors duration-300 focus:border-gray-500 focus:outline-none"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={clearSearchInput}
            className="ml-2 px-4 py-2 border-none rounded-md bg-red-600 text-white text-base cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-700 hover:shadow-lg"
          >
            Clear
          </button>
        </div>
        <button
          className="mt-2 md:mt-0 md:ml-2 py-2 px-4 rounded-md bg-green-500 text-white text-base transition-colors duration-300 ease-in-out hover:bg-green-600 active:scale-95"
          onClick={handleBtnClick}
        >
          {isFiltered
            ? "Show All Restaurants"
            : "4.3* & Above Rated Restaurants"}
        </button>
      </div>
      {list.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
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
