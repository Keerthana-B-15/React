import Item from './Items'

function Fooditems({Foodlist}) {
  return (
    <>
      <ul className='list-group-item' >
        {Foodlist.map((item, index) => <Item FoodItem={item} key={index}/> )}
      </ul>
    </>
  );
}

export default Fooditems