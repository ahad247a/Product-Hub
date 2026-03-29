import React from 'react';

const Footer = () => {
  
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#0F172A] text-gray-400 py-16 px-6 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          <div className="lg:col-span-2 pr-10">
            <h2 className="text-white text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Social Links</h4>
            <div className="flex gap-4">
              {
              <a href="#" onClick={handleLinkClick} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] hover:bg-gray-200 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              }
              <a href="#" onClick={handleLinkClick} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] hover:bg-gray-200 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              
              <a href="#" onClick={handleLinkClick} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] hover:bg-gray-200 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-80">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;