import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_API_URL + resId);
        const jsonData = await response.json();
        setResInfo(jsonData.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };

    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  return { resInfo };
};

export default useRestaurantMenu;
