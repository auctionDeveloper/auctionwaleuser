import React from 'react'
import { Router } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
    <Navbar/>
  
    <AppRoutes />
  </Router>
  )
}
