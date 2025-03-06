import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Productdetails() {
  const { id } = useParams(); //getting the product id from url
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("details"); // state to manage active tab
  const { addToCart } = useContext(CartContext); // get addtocart function from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const products = [
    {
      id: 1,
      name: "Hermes Kelly",
      brand: "Hermes",
      price: "11950 DZD",
      image: "https://via.placeholder.com/600x600",
      color: "Pink",
      size: "Small",
      promo: true,
    },
    {
      id: 2,
      name: "Chanel Flap Bag",
      brand: "Chanel",
      price: "9950 DZD",
      image: "https://via.placeholder.com/600x600",
      color: "Black",
      size: "Medium",
      promo: false,
    },
    {
      id: 3,
      name: "Dior Saddle",
      brand: "Dior",
      price: "8950 DZD",
      image: "https://via.placeholder.com/600x600",
      color: "Blue",
      size: "Large",
      promo: true,
    },
  ];

  const handleAddCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: parseInt(product.price.replace(/\D/g, "")), // convert price to number
        color: product.color,
        image: product.images[0],
      });
    }
  };

  //fetchin product data based on ID (will integrate the back end later)
  useEffect(() => {
    const fetchProduct = async () => {
      //simulate fetching data
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :{error}</div>;
  if (!product) return <div>Product not found</div>;
  const similarBags = products
    .filter((p) => p.id !== parseInt(id)) // exclude the current product
    .sort(() => Math.random() - 0.5) // shuffeling the array
    .slice(0, 4); // getting first 4 products
  return (
    <div className="container mx-auto px-4 py-8">
      {/*image gallery */}
      <div className="flex gap-8">
        {/*large image */}
        <div className="w-2/3">
          <img
            src={product.images[0]}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/*small image */}
        <div className="w-1/3 flex flex-col gap-4">
          {product.images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`Product ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg cursor-pointer shadow-md hover-shadow-lg"
            />
          ))}
        </div>
        {/*color variations */}
        <div className="w-1/3 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Colors</h3>
          {product.colors.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`Color ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg"
            />
          ))}
        </div>
      </div>
      {/*product details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.brand}</p>
        <div className="mt-4">
          <p className="text-xl font-semibold">{product.price}</p>
          <p className="text-sm text-red-500">{product.discount}</p>
          <p className="text-lg font-bold">{product.finalPrice}</p>
          <p className="text-sm text-gray-500">{product.shippingInfo}</p>
        </div>
      </div>
      {/*Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Buy Now
        </button>
        <button
          onClick={handleAddCart} // added: click handler
          className="px-6 py-2 bg-blue-200 text-white rounded-lg hover:bg-blue-800 hover:shadow-lg"
        >
          add to Cart
        </button>
      </div>
      {/*details and media tabs */}
      <div className="mt-8">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "details"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "media"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "details" ? (
            <div>
              {/* Product Specifications */}
              <div className="mb-8">
                <p>Dimensions: {product.details.dimensions}</p>
                <p>Weight: {product.details.weight}</p>
                <p>Material: {product.details.material}</p>
                <p>Accessories: {product.details.accessories}</p>
              </div>

              {/* Image Layout */}
              <div className="grid grid-cols-2 gap-8">
                {/* 1st Image with Text */}
                <div className="flex flex-col gap-4">
                  <img
                    src={product.images[0]}
                    alt="Product"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                {/* 2nd Image */}
                <div>
                  <img
                    src={product.images[1]}
                    alt="Product"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                {/* 3rd Image */}
                <div>
                  <img
                    src={product.images[2]}
                    alt="Product"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Media Tab: Image Grid */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* Video Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Product Video</h3>
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
                  <span className="text-gray-500">Video Placeholder</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/*similar bags */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Bags</h2>
        <div className="grid grid-cols-4 gap-6">
          {similarBags.map((bag) => (
            <div
              key={bag.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/*product details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{bag.name}</h3>
                <p className="text-gray-600">{bag.brand}</p>
                <p className="text-lg font-semibold">{bag.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*ceollection list */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Collection List
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="text-gray-500">Eucar</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="text-gray-500">SOVARA</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productdetails;
