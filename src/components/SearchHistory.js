import React from "react";
import { SearchIcon, TrashIcon } from "@heroicons/react/outline";

const SearchHistory = ({ history, onSearchAgain, onDelete }) => {
  if (history.length === 0) {
    return <div className="text-red-200 text-center">No search history</div>;
  }
  return (
    <div className="w-full bg-violet-700 rounded-3xl p-3">
      <h2 className="text-sm mb-2 text-white pl-10">Search History</h2>
      <ul className="">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex justify-around items-center py-1 m-2 rounded-full bg-indigo-700 "
          >
            <div className="text-white">{item}</div>
            <div>
              <button
                className="bg-indigo-600 hover:bg-indigo-800 text-white py-1 px-2 rounded-full mr-2"
                onClick={() => onSearchAgain(item)}
              >
                <SearchIcon className="w-5 h-5 inline-block" />
              </button>
              <button
                className="bg-indigo-600 hover:bg-indigo-800 text-white py-1 px-2 rounded-full ml-2"
                onClick={() => onDelete(index)}
              >
                <TrashIcon className="w-4 h-4 inline-block" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
