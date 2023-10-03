import React, { useState } from "react";

function SearchForm({ setVale, getCapsule }: any) {
  return (
    <div className="mt-6 flex items-center justify-center pb-2">
      <input
        type="text"
        placeholder=" Enter Capsule Serial"
        onChange={(event) => setVale(event.target?.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-space-blue-500"
      />
      <button
        onClick={getCapsule}
        className="ml-2 px-4 py-2 bg-space-blue text-white rounded-md hover:bg-space-purple transition duration-300"
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
