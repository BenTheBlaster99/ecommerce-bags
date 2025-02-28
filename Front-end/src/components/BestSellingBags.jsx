import { Card } from "@/components/ui/card";
import React from "react";

function BestSellingBags() {
  const emptyBoxes = Array(4).fill(null);
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium">Best Selling Bags</h2>
          <button className="text-sm text-gray-600 hover:text-black transition-colors">
            See more
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emptyBoxes.map((_, index) => (
            <div
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="aspect-[4/5] bg-gray-100"></Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellingBags;
