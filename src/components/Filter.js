import React from "react";

function Filter({ onCategoryChange, selectedCatagory, searchItem, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchItem} onChange={onSearchChange} />
      <select name="filter" onChange={onCategoryChange} value={selectedCatagory} >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
