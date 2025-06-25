import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card>
        <h3>🥗 Fresh Salad</h3>
        <p>Only ₹49 today!</p>
      </Card>

      <Card>
        <h3>🥤 Detox Juice</h3>
        <p>Special offer: ₹30</p>
      </Card>

    </>
  )
}

export default App
