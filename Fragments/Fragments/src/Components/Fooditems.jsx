import Item from './Items'

function Fooditems({Foodlist}) {
  return (
    <>
      <ul className='list-group' >
        {Foodlist.map((item, index) => 
        <Item FoodItem={item} key={index}  handleAddToCartBtn={()=> alert(` ${item} Added To Cart`)}/> )}
      </ul>
    </>
  );
}

export default Fooditems