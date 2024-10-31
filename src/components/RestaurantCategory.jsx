import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer p-4 border-b border-gray-200 hover:bg-gray-200 transition"
      >
        <span className="font-bold text-xl text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-600 text-lg">{showItems ? "▲" : "▼"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
