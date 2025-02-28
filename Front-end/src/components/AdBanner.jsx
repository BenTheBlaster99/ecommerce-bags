import React from "react";

function AdBanner(props) {
  return (
    <section className="py-8 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Ad banner - left blank*/}
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">20% OFF COUPON "bag20"</p>
        </div>
      </div>
    </section>
  );
}

export default AdBanner;
