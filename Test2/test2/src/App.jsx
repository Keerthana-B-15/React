import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Product from './components/Product'

function App() {
  return (
    <>
      <Card>
        <h3>🥗 Fresh Salad</h3>
        <p>Only ₹49 today!</p>
        <Product title="🥗 Fresh Salad"/>
      </Card>

      <Card>
        <h3>🥤 Detox Juice</h3>
        <p>Special offer: ₹30</p>
        <Product title="🥤 Detox Juice"/>
      </Card>

    </>
  )
}

export default App
