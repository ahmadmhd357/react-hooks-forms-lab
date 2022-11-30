import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem,setSearchItem] = useState('')
  const [formData,setFormData] = useState({name:'',category:'produce', id:uuid()});
  const [newItem,setNewItem] = useState(items)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handlSearch (event){
    setSearchItem(event.target.value)
    
  }
  function handlChangeForm (e){
   const name = e.target.name
   const value = e.target.value
   setFormData({...formData , [name]:value})
  }

  function addNewItems (element){
    setNewItem(items=>[...items,element])
  }
  
  function handlSubmit (e){
    e.preventDefault()
    addNewItems(formData) 
    setFormData({name:'',category:'produce', id:uuid()})
  }

  

  const itemsToDisplay = newItem.filter((item) => 
    selectedCategory === "All" || item.category === selectedCategory
  )
  .filter((item)=>
    item.name.toLowerCase().includes(searchItem.toLowerCase()) 
  );
  
  


  return (
    <div className="ShoppingList">
      <ItemForm name={formData.name} category={formData.category} onFormChange={handlChangeForm} onItemFormSubmit={handlSubmit} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} onSearchChange={handlSearch} searchItem={searchItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
