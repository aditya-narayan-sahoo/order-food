/* eslint-disable react-refresh/only-export-components */
import { SWIGGY_CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    totalRatingsString,
  } = resData.info;
  return (
    <div className="w-[250px] p-2 m-2 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg h-[450px]">
      <img
        src={SWIGGY_CDN_IMG_URL + cloudinaryImageId}
        alt="restaurant"
        className="w-full object-cover rounded-lg mb-2 h-[180px] hover:scale-105"
      />
      <h3 className="font-semibold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="flex gap-4">
        <span className="text-yellow-500">{avgRating} ★</span>
        {totalRatingsString} RATINGS
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//higher order component for veg and non-veg label
const withLabel = (RestaurantCard, label, labelColor) => {
  const WithLabelComponent = (props) => (
    <>
      <label
        className={`absolute ${labelColor} text-white rounded-md px-3 py-1 text-xs font-semibold hover:scale-105 hover:shadow-xl`}
      >
        {label}
      </label>
      <RestaurantCard {...props} />
    </>
  );
  WithLabelComponent.displayName = `WithLabel(${label})`;
  return WithLabelComponent;
};

export const withVegLabel = (RestaurantCard) =>
  withLabel(RestaurantCard, "VEG", "bg-green-600");

export const withNonVegLabel = (RestaurantCard) =>
  withLabel(RestaurantCard, "NON-VEG", "bg-red-600");

export default RestaurantCard;
