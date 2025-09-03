
import React from 'react';
import { SlideProps } from './SlideTypes';

const ExecutiveSummary: React.FC<SlideProps> = ({ 
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
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* REHOOK: Escalating the Stakes - New Problem Layer */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          {/* Rehook Alert */}
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white dark:text-gray-50 rounded-full font-bold text-xl shadow-2xl animate-pulse content-fade-in">
            🔥 REHOOK: It gets worse...
          </div>
          
          {/* WHAT: The escalated problem */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight content-fade-in content-stagger-1">
            Your Customers
            <br />
            <span className="text-red-600 dark:text-red-400">Demand</span>
            <br />
            <span className="text-orange-600 dark:text-orange-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">The Impossible</span>
          </h1>
          
          {/* WHY: The exponential challenge */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-semibold leading-relaxed px-4 content-fade-in content-stagger-2">
            Same-day delivery + zero damage + perfect tracking + impossible prices
            <br />
            <strong className="text-red-600 dark:text-red-400">= Your logistics nightmare just got 400% harder</strong>
          </p>
          
          {/* Urgency Timer */}
          <div className="bg-black/90 text-red-400 p-4 rounded-xl mx-auto max-w-2xl font-mono text-lg content-fade-in content-stagger-3">
            <div className="flex justify-center items-center space-x-4">
              <span>Customer patience:</span>
              <span className="text-2xl font-bold countdown-timer">47 seconds</span>
              <span className="text-sm animate-pulse">⏰ Ticking down</span>
            </div>
          </div>
        </div>
        
        {/* Visual Impact Infographic - The Impossible Equation */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto content-fade-in content-stagger-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            The Impossible Equation Visual Reality
          </h3>
          
          {/* Visual Flow Chart */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              
              {/* Customer Demands Bubble */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white p-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">😤</div>
                    <div className="text-lg font-bold">Customer<br/>Demands</div>
                    <div className="text-sm mt-2">↑400% Harder</div>
                  </div>
                </div>
                {/* Explosion effect */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              {/* VS Symbol */}
              <div className="text-6xl font-bold text-red-600 dark:text-red-400">VS</div>

              {/* Your Resources Bubble */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white p-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💸</div>
                    <div className="text-lg font-bold">Your<br/>Resources</div>
                    <div className="text-sm mt-2">↓60% Smaller</div>
                  </div>
                </div>
                {/* Shrinking effect */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
              </div>

            </div>

            {/* Equals Disaster */}
            <div className="text-center mt-8">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">=</div>
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full text-2xl font-bold animate-pulse">
                💥 LOGISTICS NIGHTMARE
              </div>
            </div>
          </div>
          
          {/* Stats Grid with Visual Enhancement */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="text-4xl">📈</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Customer Expectations</div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">↑ 400%</div>
              <div className="text-blue-600 dark:text-blue-300 font-medium">Since 2020</div>
            </div>
            
            <div className="space-y-4 p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-700">
              <div className="text-4xl">🏗️</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Infrastructure Costs</div>
              <div className="text-4xl sm:text-5xl font-bold text-red-600 dark:text-red-400">↑ 250%</div>
              <div className="text-red-600 dark:text-red-300 font-medium">Same period</div>
            </div>
            
            <div className="space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="text-4xl">📉</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Your Profit Margin</div>
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 dark:text-orange-400">↓ 60%</div>
              <div className="text-orange-600 dark:text-orange-300 font-medium">If you're lucky</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The Math Doesn't Work */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-red-200/50 dark:border-red-700/50 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 dark:text-red-200 mb-6">
            The Math Doesn't Work
          </h2>
          <p className="text-lg sm:text-xl text-red-600 dark:text-red-300 max-w-3xl mx-auto px-4">
            Here's what happens when companies try to solve this themselves
          </p>
        </div>
        
        {/* Failure Metrics with Visual Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { 
              label: 'Companies That Fail', 
              value: '73%', 
              description: 'Within first 2 years of expansion',
              icon: '💀',
              color: 'red'
            },
            { 
              label: 'Average Build Time', 
              value: '18mo', 
              description: 'To establish reliable network',
              icon: '⏱️',
              color: 'orange'
            },
            { 
              label: 'Infrastructure Cost', 
              value: '$2M+', 
              description: 'Minimum viable network investment',
              icon: '💸',
              color: 'yellow'
            },
            { 
              label: 'Market Share Lost', 
              value: '45%', 
              description: 'While building internal capabilities',
              icon: '📉',
              color: 'red'
            }
          ].map((metric, index) => (
            <div 
              key={index} 
              className="group text-center bg-white/90 dark:bg-gray-800/90 p-4 sm:p-6 md:p-8 rounded-2xl border border-red-200 dark:border-red-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">{metric.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-3">
                {metric.value}
              </div>
              <div className="font-bold mb-2 text-base sm:text-lg text-gray-800 dark:text-gray-200">{metric.label}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* The Bottom Line */}
        <div className="text-center mt-16 pt-12 border-t border-red-200 dark:border-red-700">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 dark:text-red-200 mb-6">
            The Bottom Line
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-red-600 dark:text-red-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Building a logistics network from scratch is like 
            <strong className="font-bold"> reinventing the wheel </strong>
            while your competitors are driving Formula 1 cars
          </p>
          
          <div className="mt-8 sm:mt-12 inline-flex items-center space-x-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl">
            <span>But what if there was another way?</span>
            <span className="text-2xl">🤔</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default ExecutiveSummary;
