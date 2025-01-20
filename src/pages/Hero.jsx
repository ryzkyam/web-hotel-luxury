import React from "react";
import assetheader from "../asset/p.jpg";
import { useActionData } from "react-router-dom";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${assetheader})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="text-center lg:text-left -mt-36"
          style={{
            color: "rgb(0, 0, 055)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1 className="text-7xl font-bold text-white">Welcome to</h1>
          <h2 className="text-7xl font-bold text-white">Luxury Hotels</h2>
          <p className="py-6 font-bold text-2xl text-white">
            We would love to hear your thoughts! Please take a moment to share
            your experience with us by clicking the button below.
          </p>

          <button className=" bg-black text-white py-2 px-4 rounded-md hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <a href="/formreview">Leave a Review</a>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
