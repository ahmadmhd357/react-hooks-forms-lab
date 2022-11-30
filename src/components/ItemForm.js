import React from "react";


function ItemForm({name,category, onFormChange, onItemFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" placeholder='name of product here' name="name" value={name} onChange={onFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
