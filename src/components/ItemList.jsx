import { CART_ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const handleAddItem = (item) => {
    // Dispatch an item to be done later
    console.log(item);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex p-4 hover:scale-105 hover:duration-100">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </h3>
              <p className="text-md text-gray-700">
                ₹{(item.card.info.price / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative flex-shrink-0 w-24 h-24">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={CART_ITEM_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <button
                className="absolute -bottom-3 right-2 bg-white text-green-600 py-1 px-4 rounded-xl shadow-lg transition-transform duration-300 hover:bg-green-600 hover:shadow-xl hover:text-white transform hover:scale-105"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
