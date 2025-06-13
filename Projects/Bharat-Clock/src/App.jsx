import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import ClockTime from './Components/ClockTime'

function App() {
  let date = new Date();
  let crr_time = date.getHours()+":"+date.getMinutes(); 
  let crr_date = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();

  return (
    <div className="container text-center">
      <ClockHeading />
      <ClockSlogan />
      <ClockTime />
    </div>
  )
}

export default App
