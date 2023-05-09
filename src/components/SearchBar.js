import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = async ({ value }) => {
    // Fetch suggestions here using an external API or a predefined list
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Search city and country',
    value,
    onChange: (event, { newValue }) => setValue(newValue),
  };

  return (
    <div className="w-full mx-auto mb-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(value);
        }}
        className="flex items-center justify-center"
      >
        <div className="flex-grow">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
            inputProps={inputProps}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
