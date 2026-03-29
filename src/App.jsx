import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Steps from './components/Steps'
import MainSection from './components/MainSection'
import Pricing from './components/Pricing';
import Footer from './components/Footer';



function App() {
  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Product already in cart!");
    }
  }

 
  const handleRemove = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
    toast.error("Product removed from cart!");
  }

  
  const handleCheckout = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.info("Checkout complete! Cart cleared.");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Navbar cartCount={cart.length} />
      <Banner />
      
      <Stats />
      
      <MainSection 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        handleRemove={handleRemove} 
        handleCheckout={handleCheckout}
      />

      <Steps />
      <Pricing />
    <Footer />

    </div>
  )
}

export default App;