import React from "react";
import { Link } from "react-router-dom";

function ProductCard(product) {
  return (
    <div className="bg-white shadown-md rounded-lg overflow-hidden">
      {/*product image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/*product details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <span className="text-sm text-blue-500">{product.tag}</span>
      </div>
      {/*link to productDetail page */}
      <Link to={`/products/${product.id}`} className="block w-full px-4 py-2 bg-blue-500 text-white text-center hover:bg-blue-600">View Details </Link>
    </div>
  );
}

export default ProductCard;
