// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login' 
import Register from './pages/Register' 
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute> <HomePage /> </PrivateRoute>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    
    </Routes>
  )
}

export default App
