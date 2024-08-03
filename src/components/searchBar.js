import { useState } from "react";

const SearchBar = ({ ingredient, setIngredient, onSearch }) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={() => onSearch(ingredient)}>Search</button>
    </div>
  );
};

export default SearchBar;
