import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurantList = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setOriginalList(restaurants);
      setList(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { originalList, list, setList };
};

export default useRestaurantList;
