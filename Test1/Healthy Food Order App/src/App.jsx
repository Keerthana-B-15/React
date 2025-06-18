import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import GreetUser from './components/GreetUser'
import Welcome from './components/Welcome'
import DiscountBanner from './components/DiscountBanner'
import StyledHeading from './components/StyledHeading'
import FoodList from './components/FoodList'
import OrderButton from './components/OrderButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <GreetUser name="Keerthana B"/>
      <Welcome user='Keerthana B'/>
      <DiscountBanner />
      <StyledHeading />
      <FoodList />
      <OrderButton label='Order' onClick={() => alert('Order Placed!')}/>
      <Footer />
    </>
  )
}

export default App
