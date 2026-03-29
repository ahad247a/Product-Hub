import React from 'react';
import { ShoppingCart } from 'lucide-react'; // আইকনের জন্য

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      
      {/* ১. লোগো (ইমেজ অনুযায়ী পার্পল কালার) */}
      <div className="flex-shrink:0">
        <h1 className="text-3xl font-extrabold text-[#7C3AED]">DigiTools</h1>
      </div>

      {/* ২. মাঝখানের মেনু লিংঙ্কস */}
      <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <li className="hover:text-[#7C3AED] cursor-pointer">Products</li>
        <li className="hover:text-[#7C3AED] cursor-pointer">Features</li>
        <li className="hover:text-[#7C3AED] cursor-pointer">Pricing</li>
        <li className="hover:text-[#7C3AED] cursor-pointer">Testimonials</li>
        <li className="hover:text-[#7C3AED] cursor-pointer">FAQ</li>
      </ul>

      {/* ৩. ডানপাশের কার্ট এবং বাটন */}
      <div className="flex items-center gap-6">
        {/* কার্ট আইকন ও কাউন্ট */}
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[10px] font-bold px-1.5 rounded-full">
            {cartCount}
          </span>
        </div>

        {/* লগইন টেক্সট */}
        <button className="hidden sm:block text-gray-700 font-semibold hover:text-[#7C3AED]">
          Login
        </button>

        {/* গেট স্টার্টেড বাটন (ইমেজ অনুযায়ী রাউন্ডেড ও কালার) */}
        <button className="bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;