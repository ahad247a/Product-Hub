import React from 'react';
import { Play } from 'lucide-react';

const Banner = () => {
  return (
   
    <section className="bg-white overflow-hidden py-10 md:py-16">
      
      
      <div className="max-w-7xl mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
       
        <div className="flex-1 space-y-6 animate-fade-in text-center md:text-left">
          
         
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] px-3 py-1.5 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]"></span>
            </span>
            <p className="text-[#7C3AED] text-xs font-semibold">New: AI-Powered Tools Available</p>
          </div>

          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F2937] leading-[1.15] tracking-tight">
            Supercharge Your <br /> 
            Digital Workflow
          </h1>

          
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

        
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <button className="bg-[#7C3AED] text-white px-7 py-3 rounded-full font-bold shadow-md hover:shadow-purple-100 hover:bg-[#6D28D9] transition-all text-sm">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 border border-purple-200 text-[#7C3AED] px-7 py-3 rounded-full font-bold hover:bg-purple-50 transition-all text-sm">
              <Play className="w-4 h-4 fill-[#7C3AED]" /> 
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="relative">
            
            <img 
              src="./Banner.png" 
              alt="Digital Workflow" 
              className="w-full max-w-md h-auto rounded-2xl shadow-xl border border-gray-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;