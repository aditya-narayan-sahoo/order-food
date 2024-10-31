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
    <div className="body">
      <div className="p-[10px] mx-auto my-[10px] flex justify-center">
        <div className="flex items-center my-0 mx-[10px]">
          <input
            type="text"
            className="p-[10px] border border-gray-300 rounded-md text-base w-[260px] transition-colors duration-300 focus:border-black focus:outline-none"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={clearSearchInput}
            className="ml-2 px-5 py-[10px] border-none rounded-md bg-red-600 text-white text-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-[2px]"
          >
            Clear
          </button>
        </div>
        <button
          className="m-1 cursor-pointer border-none py-3 px-5 rounded-md bg-[#00ff26] text-black text-base transition-colors duration-500 ease-in-out transform hover:bg-[#007f26] hover:text-white hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[1px] active:shadow-none"
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
