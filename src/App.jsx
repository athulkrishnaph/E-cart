import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id/view' element={<View />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>

      {/* footer  */}
      <Footer/>
    </>
  )
}

export default App
