/* eslint-disable */
import React,{useState} from "react";
import Item from "./item";
import  '../styles/App.css'

const MovieLis = ({setList})=>{
  // const [ItemItems, setItemItems] = useState(Item);
  const [categories, setCategories] = useState([
    'All',
    ...new Set(Item.map((item) => item.category)),
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterItems = (category) => {
    if (category === 'All') {
      setList(Item);
    } else if(category === 'Breakfast') {
      const filteredItems = Item.filter((item) => item.category === category);
      setList(filteredItems);
      console.log(filteredItems)
    }
    else if(category === 'Lunch') {
      const filteredItems = Item.filter((item) => item.category === category);
      setList(filteredItems);
      console.log(filteredItems)
    }
    else if(category === 'Shakes') {
      const filteredItems = Item.filter((item) => item.category === category);
      setList(filteredItems);
      console.log(filteredItems)
    }
    setSelectedCategory(category);
  };

  return(
    <div className="abc">
    {
    categories.map((category, index) => (
      <h3
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
      </h3>
    ))
    }
  </div>
  )
}
 export default MovieLis;
