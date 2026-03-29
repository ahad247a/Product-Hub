import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-sm mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
         
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col text-left">
            <h3 className="text-lg font-bold text-gray-800">Starter</h3>
            <p className="text-gray-400 text-xs mb-4">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-3xl font-black text-gray-900">$0</span>
              <span className="text-gray-400 text-sm font-medium">/Month</span>
            </div>
            <ul className="space-y-3 mb-6 grow">
              {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-[13px]">
                  <Check className="w-3.5 h-3.5 text-green-500 stroke-[3px]" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#7C3AED] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#6D28D9] transition-all">Get Started Free</button>
          </div>

          
          <div className="bg-[#7C3AED] p-7 rounded-[28px] shadow-xl flex flex-col text-left relative transform md:scale-105 z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white">Pro</h3>
            <p className="text-purple-100 text-xs mb-4">Best for professionals</p>
            <div className="mb-6">
              <span className="text-3xl font-black text-white">$29</span>
              <span className="text-purple-200 text-sm font-medium">/Month</span>
            </div>
            <ul className="space-y-3 mb-6 grow">
              {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Cloud sync', 'Advanced analytics'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-white text-[13px] font-medium">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3px]" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-[#7C3AED] py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">Start Pro Trial</button>
          </div>

          
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col text-left">
            <h3 className="text-lg font-bold text-gray-800">Enterprise</h3>
            <p className="text-gray-400 text-xs mb-4">For teams and businesses</p>
            <div className="mb-6">
              <span className="text-3xl font-black text-gray-900">$99</span>
              <span className="text-gray-400 text-sm font-medium">/Month</span>
            </div>
            <ul className="space-y-3 mb-6 grow">
              {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'Custom branding'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-[13px]">
                  <Check className="w-3.5 h-3.5 text-green-500 stroke-[3px]" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#7C3AED] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#6D28D9] transition-all">Contact Sales</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;