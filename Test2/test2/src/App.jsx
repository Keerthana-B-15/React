import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Product from './components/Product'
import ClickCounter from './components/ClickCounter'
import RemoveItem from './components/RemoveItem'
import ItemLikeCounter from './components/ItemLikeCounter'

function App() {

  const [count, setCount] = useState(0);

  const HandleOnClick = () => {
    setCount(count +1);
  }

  const handleRemoveItem = ()  => alert("Item Removed!");


  return (
    <>
      <Card>
        <h3>🥗 Fresh Salad</h3>
        <p>Only ₹49 today!</p>
        <Product title="🥗 Fresh Salad"/>
        <ClickCounter count={count} HandleOnClick={HandleOnClick} />
        <RemoveItem onRemove ={handleRemoveItem} />
        <ItemLikeCounter title="🥗 Fresh Salad"/> 
      </Card>

      <Card>
        <h3>🥤 Detox Juice</h3>
        <p>Special offer: ₹30</p>
        <Product title="🥤 Detox Juice"/>
        <ClickCounter count={count} HandleOnClick={HandleOnClick} />
        <RemoveItem onRemove={handleRemoveItem} />
        <ItemLikeCounter title="🥤 Detox Juice"/>   
      </Card>

    </>
  )
}

export default App
