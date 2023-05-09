import React from "react";

const SearchHistory = ({ history, onSearchAgain, onDelete }) => {
  if (history.length === 0) {
    return <div>No search history</div>;
  }

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-2">Search History</h2>
      <ul className="divide-y divide-gray-200">
        {history.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <div>{item}</div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2"
                onClick={() => onSearchAgain(item)}
              >
                Search
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
