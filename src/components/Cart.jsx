import { useDispatch, useSelector } from "react-redux";
import { clearCart, addItem, removeItem } from "../store/cartSlice";
import { CART_ITEM_IMG_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.card?.info?.price || item.card?.info?.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-8">My Cart</h1>
      <button
        className="p-2 mt-2 shadow-xl bg-blue-600 text-white rounded-md hover:bg-violet-700 hover:scale-105"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <div className="w-8/12 md:w-6/12 p-6 mt-3 bg-white shadow-lg rounded-lg">
        {cartItems.length === 0 ? (
          <h1 className="text-center text-lg text-gray-500">
            Cart is empty. Add items to the cart!
          </h1>
        ) : (
          <div className="flex flex-col space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.card.info.id}
                className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.card.info.name}
                  </h3>
                  <p className="text-md text-gray-700">
                    ₹
                    {(
                      (item.card.info.price || item.card.info.defaultPrice) /
                      100
                    ).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="relative flex-shrink-0 w-32 h-32 ml-4">
                  <img
                    className="rounded-lg object-cover w-full h-full"
                    src={`${CART_ITEM_IMG_URL}${item.card.info.imageId}`}
                    alt={item.card.info.name}
                  />
                  <div className="absolute -bottom-4 left-0 right-0 flex p-1 justify-center gap-4">
                    <button
                      className="bg-white border-2 font-bold border-green-500 text-green-600 py-1 px-3 rounded-xl shadow-lg transition-transform duration-300 hover:bg-green-600 hover:text-white transform hover:scale-105"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>

                    <button
                      className="bg-white border-2 font-bold border-red-500 text-red-500 py-1 px-3 rounded-xl shadow-lg transition-transform duration-300 hover:bg-red-600 hover:text-white transform hover:scale-105"
                      onClick={() => handleRemoveItem(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-lg text-center font-bold text-gray-800">
              Total Price: ₹{totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
