import React, { useContext, useState } from "react";
import { FaHeart, FaShoppingCart, FaUser, FaSun, FaMoon, FaSearch } from "react-icons/fa";
import logo from "../assets/sovara.png"
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {cart} =useContext(CartContext)
  const [searchQuery, setSearchQuery] = useState("") // state for search query
  const navigate = useNavigate();

  const handleSearchChange = (e) =>{
    setSearchQuery(e.target.value);}

    const handleSearchSubmit =(e) =>{
    if (searchQuery.trim()) {
      navigate(`/products?search${encodeURIComponent(searchQuery)}`)// redirect to products page with search query
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle theme (e.g., update a global context)
  };

  

  return (
    <header className="bg-white shadow-md ">
      {/* Top Section */}
      <div className="flex justify-end items-center p-2 bg-gray-100 dark:bg-gray-700">
        <a href="#" className="text-sm text-gray-600 dark:text-gray-300 mr-4">
          Help & FAQs
        </a>
        <select className="text-sm text-gray-600 dark:text-gray-300 bg-transparent border-none">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
        <Link to="/">
          <img src={logo} alt="SOVARA logo" className="h-12" />
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} action="relative">
        <div className="flex-grow mx-8">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-amber-600 dark:border-gray-600 dark:text-white"
          />
          <button type="submit" className="absolute right-3 top-3 text-gray-500">
            <FaSearch/>
          </button>
        </div>
          </form>

        {/* Icons */}
        <div className="flex space-x-6">
          <FaHeart className="text-black  cursor-pointer" />
          <Link to="/checkout" className="flex items-center gap-2">
          <FaShoppingCart className="text-black cursor-pointer" />
          <span className="text-black">Cart ({cart.length})</span>
          </Link>
          <FaUser className="text-black cursor-pointer" />
          {isDarkMode ? (
            <FaSun
              className="text-black cursor-pointer"
              onClick={toggleTheme}
            />
          ) : (
            <FaMoon
              className="text-black cursor-pointer"
              onClick={toggleTheme}
            />
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-center space-x-8 p-4 bg-gray-100 ">
        <a href="#" className="text-gray-800 dark:text-white">
          What's New
        </a>
        <a href="#" className="text-gray-800 dark:text-white">
          Everyday
        </a>
        <a href="#" className="text-gray-800 dark:text-white">
          Mini Bags
        </a>
        <a href="#" className="text-gray-800 dark:text-white">
          Small Bags
        </a>
        <a href="#" className="text-gray-800 dark:text-white">
          Large Bags
        </a>
      </nav>
    </header>
  );
};


export default Header;
