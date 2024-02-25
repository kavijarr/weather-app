import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div className='mt-5'>
      <WeatherCard></WeatherCard>
    </div>
  )
}

export default App
