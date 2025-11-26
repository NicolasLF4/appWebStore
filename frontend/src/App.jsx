import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login' 
import Register from './pages/Register' 
import HomePage from './pages/HomePage/HomePage.jsx'
import ProductUpload from './pages/ProductUpload.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/admin" element={<ProductUpload/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
