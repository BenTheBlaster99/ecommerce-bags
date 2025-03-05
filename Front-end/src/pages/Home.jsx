import React from "react";
import ad from "../assets/ad.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToProducts = (filter) =>{
    navigate(`/products?filter=${filter}`)
  }

  return (
    <div className="container mx-auto px-4">
      {/* Big Advertising Picture */}
      <section className="my-8">
        <div className="w-full h-96 overflow-hidden">
          <img
            src={ad}
            alt="advertising"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Popular Collection Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popular Collection
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-center"
            >
              <span className="text-gray-500">Product {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigateToProducts("all")}
            className="px-6 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popular Brands
        </h2>
        <div className="grid grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-center"
              onClick={() =>navigateToProducts(brand)} //filter by brand
            >
              <span className="text-gray-500">Brand {index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Bags Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Best Selling Bags
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xl">Swipeable Section</span>
        </div>
      </section>

      {/* Another Big Advertising Picture */}
      <section className="my-8">
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xl">Advertising Picture</span>
        </div>
      </section>
      {/*Collection list */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Collection List
        </h2>
        <div className=" space-y-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="text-gray-500">eucar</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="text-gray-500">SOVARA</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
