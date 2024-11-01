import { useState } from "react";
import { HEADER_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg m-2 p-2">
      <div className="logo-container flex items-center">
        <img className="w-32" src={HEADER_IMG} alt="Company" />
        <span className="ml-8 text-2xl font-bold text-gray-800">
          Order Your Favourite Food
        </span>
      </div>
      <div className="nav-items">
        <ul className="flex flex-col text-lg list-none md:flex-row">
          <li className="mx-4 py-1 px-3 relative hover:bg-gray-200 rounded-lg transition-colors duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 py-1 px-3 relative hover:bg-gray-200 rounded-lg transition-colors duration-500">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 py-1 px-3 relative hover:bg-gray-200 rounded-lg transition-colors duration-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 py-1 px-3 relative hover:bg-gray-200 rounded-lg transition-colors duration-500 font-semibold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="mr-2 px-4 py-1 border-none bg-gray-300 text-black text-base rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-300"
            onClick={() => setIsLoggedIn((prevState) => !prevState)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
