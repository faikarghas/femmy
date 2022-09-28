import React from 'react';

const SearchProduct = () => (
  <form className="w-full">
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
    >
      Search
    </label>
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-femmy-pdark
              "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block p-2 pl-10 w-full text-sm text-gray-900 bg-femmy-white rounded-2xl focus:outline-none border-femmy-pdark"
        placeholder="cari produk"
      />
      {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-femmy-pdark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Search</button> */}
    </div>
  </form>
);

export default SearchProduct;
