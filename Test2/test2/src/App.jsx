import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Product from './components/Product'
import ClickCounter from './components/ClickCounter'

function App() {

  const [count, setCount] = useState(0);

  const HandleOnClick = () => {
    setCount(count +1);
  }


  return (
    <>
      <Card>
        <h3>🥗 Fresh Salad</h3>
        <p>Only ₹49 today!</p>
        <Product title="🥗 Fresh Salad"/>
        <ClickCounter count={count} HandleOnClick={HandleOnClick} />
      </Card>

      <Card>
        <h3>🥤 Detox Juice</h3>
        <p>Special offer: ₹30</p>
        <Product title="🥤 Detox Juice"/>
        <ClickCounter count={count} HandleOnClick={HandleOnClick} />
      </Card>

    </>
  )
}

export default App
