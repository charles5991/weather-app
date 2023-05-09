import React, { useState } from "react";
import { SearchIcon, TrashIcon } from "@heroicons/react/outline";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full mx-auto mb-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(value);
        }}
        className="flex items-center justify-center"
      >
        <div class="max-w-md mx-auto">
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm backdrop-blur-sm bg-white/30 text-gray-700 pr-2"
              type="text"
              placeholder="Search city and country"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-2 rounded-lg ml-2"
        >
          <SearchIcon className="w-5 h-5 inline-block" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
