import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'
import Greet from './components/GreetUser'
import GreetMessage from './components/GreetMessage'
import Button from './components/Button'
import Greeting from './components/Greeting'
import FoodList from './components/FoodList'
import Discount from './components/DiscountBanner'
import StyleMessage from './components/StyleMessage'

function App() {

  return (
    <>
      <Greet name="Keerthana B"/>
      <GreetMessage />
      <Header />
      <Welcome />
      <Discount />
      <StyleMessage />
      <Greeting name="Keerthana B" />
      <FoodList />
      <Button label="Shop Now" onClick={() => alert('Shop Now button was clicked')}/>
      <Footer />
    </>
  )
}

export default App
