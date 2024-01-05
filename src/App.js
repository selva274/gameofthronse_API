import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pages from './components/Pages'

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Pages/>
    </BrowserRouter>
    </div>
  )
}
