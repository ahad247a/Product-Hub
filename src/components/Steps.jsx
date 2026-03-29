import React from 'react';

const Steps = () => {
  return (
    <section className="bg-white py-12 px-10">
      <div className="max-w-6xl mx-auto text-center">
        
        x
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm mb-10">Start using premium digital tools in minutes, not hours.</p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
        
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">01</span>
            <img src="/user.png" alt="" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-bold text-gray-800">Create Account</h3>
            <p className="text-gray-500 text-xs mt-2">Sign up for free in seconds. No credit card required.</p>
          </div>

         
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">02</span>
            <img src="/package.png" alt="" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-bold text-gray-800">Choose Products</h3>
            <p className="text-gray-500 text-xs mt-2">Browse our catalog and select the tools you need.</p>
          </div>

        
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">03</span>
            <img src="/rocket.png" alt="" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-bold text-gray-800">Start Creating</h3>
            <p className="text-gray-500 text-xs mt-2">Download and start using your tools immediately.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;