import React from "react";
import { Link } from "react-router-dom";

function Confrimation(props) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">THANKS FOR BUYING FROM US</h1>
      <p className="text-lg mb-8">
        you will recieve a call from us to confirm your order
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back to main page
      </Link>

      {/*questions */}
      <div className="mt-12 text-left">
        <h2 className="text-xl font-bold mb-4">COMMON QUESTIONS:</h2>
        <ul className="space-y-2">
          <li>How much time does the shipping take?</li>
          <li>Where can i track my order</li>
          <li>When will i recieve the call?</li>
        </ul>
      </div>
    </div>
  );
}

export default Confrimation;
