import { SWIGGY_CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="w-[250px] p-2 m-2 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg h-[450px]">
      <img
        src={SWIGGY_CDN_IMG_URL + cloudinaryImageId}
        alt="restaurant"
        className="w-full object-cover rounded-lg mb-2 h-[180px] hover:scale-105"
      />
      <h3 className="font-semibold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-500">{avgRating} ★</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
