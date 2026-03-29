import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
 const [cart, setCart] = useState([])

  return (
    <>
     <div className="min-h-screen">
      <Navbar cartCount={cart.length} />
      
      {/* এখানে পরবর্তী সেকশনগুলো (Banner, Stats) আসবে */}
    </div>
    </>
  )
}

export default App
