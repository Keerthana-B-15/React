import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FoodList from './components/FoodList'



function App() {

  const [cartcount, setcartCount] = useState(0)

  return (
    <>
      <Header cartcount={cartcount} />
      <FoodList cartcount={cartcount} setcartCount={setcartCount} />
      <FoodList cartcount={cartcount} setcartCount={setcartCount} />
      <Footer />
    </>
  )
}

export default App
