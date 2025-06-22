import Item from './Items'
import { useState } from 'react';

function Fooditems({Foodlist}) {

  let [activeItems, SetActiveItems] = useState([]);

  let OnAddBtn = (item, event) => {
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  } 

  return (
    <>
      <ul className='list-group' >
        {Foodlist.map((item, index) => 
        <Item 
          FoodItem={item} 
          key={index}  
          handleAddToCartBtn={(event)=> OnAddBtn(item, event)}
          addToCart={activeItems.includes(item)}
          /> 
        
        )}
      </ul>
    </>
  );
}

export default Fooditems