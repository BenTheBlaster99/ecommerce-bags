import React, { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import baseURL from "../api/axios"
import axios from "axios";

function Products() {
  const [searchParams] = useSearchParams(); // Getting URL query parameters
  const [filter, setFilter] = useState("all"); // State to manage filter
  const [activeFilter, setActiveFilter] = useState(null); // State to manage active filter
  const [selectedColor, setSelectedColor] = useState(null); // State for selected color
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [selectedBrand, setSelectedBrand] = useState(null); // State for selected brand
  const [selectedPromo, setSelectedPromo] = useState(null); // State for selected promo
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // parse the query paramertre from url
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.get("filter") || "all";

    if (filterParam !== filter) {

      setFilter(filterParam);
    }

    //fetching products based on the filter
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`);
        console.log("filteredProducts:,", filteredProducts);

        setProducts(response.data);
        console.log(`fetched products:`, response.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.error("error fetching products:", error);

        setLoading(false);
      }
    };
    fetchProduct();
  }, [location.search,filter]); //re-run when the url change

  const navigateToProducts = (filter) => {
    console.log("navigating to products with filter:", filter);
    navigate(`/products?filter=${filter}`);
  };

  // Update filter based on URL
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    const searchParam = searchParams.get("search");
    if (filterParam) {
      setFilter(filterParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Filter products based on the selected filter
  const filteredProducts =
    !products || !Array.isArray(products)
      ? []
      : filter === "all"
      ? products
      : products.filter((product) => {
          const matchesSearch = product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          console.log("filteredProducts:", filteredProducts);
          switch (activeFilter) {
            case "color":
              return product.color === filter;
            case "size":
              return product.size === filter;
            case "brand":
              return product.brand === filter;
            case "promo":
              return filter === "On Sale" ? product.promo : !product.promo;
            default:
              return true;
          }
        });

  if (filteredProducts.length === 0) {
    return <div>No Products Found</div>;
  }

  const toggleFilterMenu = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  const handleFilterSelection = (filterType, option) => {
    setFilter(option); // Update the filter state
    setActiveFilter(null); // Close the filter menu

    // Update the selected filter option
    switch (filterType) {
      case "color":
        setSelectedColor(option);
        break;
      case "size":
        setSelectedSize(option);
        break;
      case "brand":
        setSelectedBrand(option);
        break;
      case "promo":
        setSelectedPromo(option);
        break;
      default:
        break;
    }
  };

  const resetFilter = (filterType) => {
    setFilter("all"); // Reset the filter
    setActiveFilter(null); // Close the filter menu

    // Reset the selected filter option
    switch (filterType) {
      case "color":
        setSelectedColor(null);
        break;
      case "size":
        setSelectedSize(null);
        break;
      case "brand":
        setSelectedBrand(null);
        break;
      case "promo":
        setSelectedPromo(null);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Filter Section */}
      <section className="my-8">
        <div className="flex flex-wrap gap-4">
          {/* Color Filter */}
          <div className="relative">
            <button
              onClick={() =>
                selectedColor ? resetFilter("color") : toggleFilterMenu("color")
              }
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {selectedColor || "Color"}
            </button>
            {activeFilter === "color" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                {filterOptions.color.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilterSelection("color", option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="relative">
            <button
              onClick={() =>
                selectedSize ? resetFilter("size") : toggleFilterMenu("size")
              }
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {selectedSize || "Size"}
            </button>
            {activeFilter === "size" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                {filterOptions.size.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilterSelection("size", option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="relative">
            <button
              onClick={() =>
                selectedBrand ? resetFilter("brand") : toggleFilterMenu("brand")
              }
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {selectedBrand || "Brand"}
            </button>
            {activeFilter === "brand" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                {filterOptions.brand.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilterSelection("brand", option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Promo Filter */}
          <div className="relative">
            <button
              onClick={() =>
                selectedPromo ? resetFilter("promo") : toggleFilterMenu("promo")
              }
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {selectedPromo || "Promo"}
            </button>
            {activeFilter === "promo" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                {filterOptions.promo.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilterSelection("promo", option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Showing products for: {filter}
        </h2>
        <div className="grid grid-cols-2 gap-6 border-2 border-red-500">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3>Products</h3>
                <p>Filter: {filter}</p>
                {products.map((product) => (
                  <div key={product.id}>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
