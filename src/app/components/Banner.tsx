import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-space-gradient">
      <div className="w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Explore SpaceX's Galactic Adventures
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-900">
            Discover the wonders of space and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
