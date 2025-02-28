import React from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "New In",
  "Trending",
  "Bestsellers",
  "Clothing",
  "Shoes",
  "Accessories",
  "Gift Cards",
];

function Navigation(props) {
  return (
    <nav className="border-b border-gray-100">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-12">
          {categories.map((category) => (
            <li key={category}>
              <Button
                vairant="ghost"
                className="text-sm font-medium hover:bg-transparent hover:text-black py-4"
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
