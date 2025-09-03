import React from 'react';
import Image from 'next/image';
import { SlideProps } from './SlideTypes';
import { CALENDLY_URL } from '@/lib/contact';

const AgendaOverview: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  return (
    <section className={`min-h-screen flex flex-col space-y-16 ${className}`}>

      {/* 2025 High-Intensity Opening - WHAT & WHY First */}
      <div className="text-center space-y-8 flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          {/* Immediate Crisis Hook */}
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white dark:text-gray-50 rounded-full font-bold text-xl shadow-2xl animate-pulse">
            🚨 CRISIS ALERT: $7.67 BILLION LOST TODAY
          </div>
          
          {/* The WHAT - High Stakes Problem */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight">
            Your Competitors
            <br />
            <span className="text-gray-900 dark:text-gray-100">Are Winning</span>
          </h1>
          
          {/* The WHY - Why This Matters NOW */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto font-semibold leading-relaxed px-4">
            While you're reading this, they're capturing
            <br />
            <strong className="text-red-600 dark:text-red-400">YOUR customers, YOUR market share, YOUR future</strong>
          </p>
          
          {/* Countdown Timer Visual */}
          <div className="bg-black/90 text-red-400 p-6 rounded-2xl mx-auto max-w-2xl font-mono text-2xl md:text-3xl">
            <div className="flex justify-center items-center space-x-4">
              <span>Money Lost:</span>
              <span className="text-4xl md:text-5xl font-bold">$320,000</span>
              <span className="text-sm">per min</span>
            </div>
          </div>
        </div>
        
        {/* The WHO & HOW - After establishing urgency */}
        <div className="mt-12 space-y-8">
          {/* First Tension Release: WHO can solve this */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              But ONE company has cracked the code...
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              <strong>Driver Network Inc.</strong> - The logistics partner your competitors wish they had
            </p>
            
            {/* Proof Points - Visual Impact Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300">On-time delivery</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">While others struggle at 72%</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">$50M+</div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Value delivered</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">In just 3 years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Major incidents</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Zero tolerance policy</div>
              </div>
            </div>
          </div>
          
          {/* HOW - The method behind the success */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
              HOW? Through a proven system that eliminates the guesswork
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white rounded-full font-semibold">
              1,000+ drivers • 19 markets • Zero excuses
            </div>
          </div>
        </div>
      </div>
      
      {/* REHOOK: The Hidden Trap - Second Tension Peak */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-red-200/50 dark:border-red-700/50 shadow-2xl">
        
        {/* Rehook: Opening New Loop */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold text-lg mb-6">
            ⚠️ REHOOK: But there's something you DON'T know...
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 dark:text-red-200 mb-6">
            The $2.8 Trillion Death Trap
          </h2>
          <p className="text-lg sm:text-xl text-red-700 dark:text-red-300 mb-8">
            Success stories hide the real danger lurking in logistics...
          </p>
        </div>
          
        {/* Enhanced Graphic illustration with dramatic visual impact */}
        <div className="mb-8 mx-auto max-w-4xl">
          <div className="relative bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-8 rounded-2xl border border-red-300/50 dark:border-red-600/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Visual Impact */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Image 
                    src="/supply-chain-containers.jpg" 
                    alt="Shipping containers at port terminal illustrating supply chain complexity"
                    width={400}
                    height={240}
                    className="w-full h-60 object-cover rounded-xl shadow-lg border-4 border-white/50"
                  />
                  {/* Overlay with crisis indicators */}
                  <div className="absolute inset-0 bg-red-600/20 rounded-xl flex items-center justify-center">
                    <div className="bg-red-600/90 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      💸 Daily Losses: $7.67B
                    </div>
                  </div>
                </div>
                <div className="text-xs text-red-700 dark:text-red-300 font-medium text-center">
                  Global freight industry loses $2.8 trillion annually to inefficiencies
                </div>
              </div>
              
              {/* Right: The Crisis Chain */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">The Crisis Chain:</h4>
                <div className="space-y-3">
                  {[
                    { icon: '📦', text: 'Customer Orders', impact: '+47% annually' },
                    { icon: '⚠️', text: 'Infrastructure Gaps', impact: 'Critical shortage' },
                    { icon: '💸', text: 'Lost Revenue', impact: '$2.8T annually' },
                    { icon: '📉', text: 'Failed Deliveries', impact: '28% failure rate' },
                    { icon: '😤', text: 'Frustrated Customers', impact: 'Brand damage' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="flex-1 font-semibold text-red-800 dark:text-red-200">{item.text}</span>
                      <span className="text-sm text-red-600 dark:text-red-300 font-medium">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl text-red-600 dark:text-red-300 max-w-3xl mx-auto px-4 text-center mb-12">
          Every day, freight companies lose millions because they can't deliver what customers expect
        </p>
        
        {/* Cost of Inaction Visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-4">73%</div>
            <div className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Fail Within 2 Years</div>
            <div className="text-red-600 dark:text-red-300">Companies attempting to build logistics networks</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-4">18mo</div>
            <div className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Average Build Time</div>
            <div className="text-red-600 dark:text-red-300">While competitors capture market share</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-4">$2M+</div>
            <div className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Minimum Investment</div>
            <div className="text-red-600 dark:text-red-300">Before seeing any meaningful results</div>
          </div>
        </div>
        
        {/* Final Tension Release & Compelling CTA */}
        <div className="text-center mt-16 pt-8 border-t border-red-200 dark:border-red-700">
          {/* Tension Release */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
              🎯 BREAKTHROUGH: The escape route exists
            </p>
            <p className="text-base sm:text-lg text-green-700 dark:text-green-300 px-4">
              One that doesn't require years of building, millions in investment, or prayers that it works
            </p>
          </div>
          
          {/* Urgency Amplifier */}
          <div className="bg-black/90 text-yellow-400 p-4 rounded-xl mb-8 font-mono">
            <div className="text-sm mb-2">Every minute you delay:</div>
            <div className="text-2xl font-bold">
              💰 $320,000 lost • 🏆 Competitors advance • ⏰ Opportunities vanish
            </div>
          </div>
          
          <button 
            onClick={onNext}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-xl sm:text-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer shadow-lg"
          >
            <span>🚀 See the breakthrough solution</span>
            <span className="text-3xl animate-bounce">→</span>
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Next: How we turn your logistics nightmare into your competitive advantage
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgendaOverview;