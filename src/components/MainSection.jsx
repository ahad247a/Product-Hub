import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const MainSection = ({ cart, handleAddToCart, handleRemove, handleCheckout }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('product');

  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Premium Digital Tools</h2>
        <p className="text-gray-500 text-sm mb-6">Choose from our curated collection of premium products.</p>
        
        <div className="flex justify-center gap-3">
          <button 
            onClick={() => setActiveTab('product')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              activeTab === 'product' ? 'bg-[#7C3AED] text-white shadow-md' : 'bg-white border text-gray-500'
            }`}
          >Products</button>
          
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-md' : 'bg-white border text-gray-500'
            }`}
          >Cart ({cart.length})</button>
        </div>
      </div>

      {activeTab === 'product' ? (
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col">
              <span className="absolute top-3 right-3 bg-purple-50 text-[#7C3AED] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                {product.tag}
              </span>
              
              <div className="text-3xl mb-3">{product.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-400 text-xs">/{product.period}</span>
              </div>

              <ul className="space-y-2 mb-6 grow">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-[13px]">
                    <Check className="w-3.5 h-3.5 text-green-500 stroke-[3px]" /> {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#7C3AED] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#6D28D9] transition-all"
              >Buy Now</button>
            </div>
          ))}
        </div>
      ) : (
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-center py-10 text-gray-400">Cart is empty</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-xs">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-red-400 text-xs font-bold hover:text-red-600">Remove</button>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t mt-4">
                <span className="text-gray-500 font-bold">Total:</span>
                <span className="text-2xl font-bold">${totalPrice}</span>
              </div>
              <button onClick={handleCheckout} className="w-full bg-[#7C3AED] text-white py-3 rounded-full font-bold mt-4 hover:bg-[#6D28D9]">Proceed To Checkout</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MainSection;