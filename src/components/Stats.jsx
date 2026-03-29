import React from 'react';

const Stats = () => {
  return (
   
    <section className="w-full">
      
      <div 
        style={{ background: 'linear-gradient(to right, #4F39F6, #9514FA)' }}
        className="py-12 md:py-16 text-white shadow-lg"
      >
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0 px-6">
          
          
          <div className="text-center flex-1 ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-1">50K+</h2>
            <p className="text-purple-100 text-sm md:text-base opacity-90">Active Users</p>
          </div>

          
          <div className="hidden md:block h-16 w-px bg-white opacity-20"></div>

          
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-1">200+</h2>
            <p className="text-purple-100 text-sm md:text-base opacity-90">Premium Tools</p>
          </div>

         
          <div className="hidden md:block h-16 w-px bg-white opacity-20"></div>

          
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-1">4.9</h2>
            <p className="text-purple-100 text-sm md:text-base opacity-90">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;