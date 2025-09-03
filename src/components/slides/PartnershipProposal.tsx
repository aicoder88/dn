import React from 'react';
import { PARTNERSHIPS_EMAIL, CALENDLY_URL } from '@/lib/contact';
import { SlideProps } from './SlideTypes';

const PartnershipProposal: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const proposalHighlights = [
    {
      title: 'Immediate Network Access',
      description: '1,000+ drivers across 19 markets ready to deploy',
      value: '$50M+ proven capacity',
      icon: '🌐',
      color: 'blue'
    },
    {
      title: 'Zero Infrastructure Investment',
      description: 'No upfront costs, no hiring, no training overhead',
      value: '$2M+ savings vs building',
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Enterprise-Grade Technology',
      description: 'API integration, real-time tracking, analytics dashboard',
      value: '48-hour integration',
      icon: '⚡',
      color: 'purple'
    },
    {
      title: 'Proven Performance',
      description: '100% on-time delivery, 99.9% damage-free record',
      value: '98% client satisfaction',
      icon: '🎯',
      color: 'orange'
    }
  ];

  const partnershipModels = [
    {
      model: 'Strategic Partnership',
      description: 'Full network integration with co-branded service',
      benefits: [
        'Dedicated driver fleet allocation',
        'Custom technology integration',
        'Joint marketing initiatives',
        'Priority capacity access'
      ],
      commitment: 'Multi-year partnership',
      icon: '🤝',
      color: 'blue',
      recommended: true
    },
    {
      model: 'Service Integration',
      description: 'White-label logistics as part of your platform',
      benefits: [
        'Seamless API integration',
        'Your branding throughout',
        'Custom pricing models',
        'Dedicated account management'
      ],
      commitment: 'Flexible terms',
      icon: '🔗',
      color: 'green',
      recommended: false
    },
    {
      model: 'Pilot Program',
      description: 'Limited scope proof-of-concept deployment',
      benefits: [
        'Low-risk market test',
        'Performance validation',
        'Scalable foundation',
        'Quick implementation'
      ],
      commitment: '90-day pilot',
      icon: '🧪',
      color: 'orange',
      recommended: false
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      
      {/* REHOOK: The Final Decision Point */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full font-bold text-xl shadow-2xl animate-pulse">
            🎯 FINAL REHOOK: The moment that changes everything...
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Two Paths
            <br />
            <span className="text-red-600 dark:text-red-400">One Future</span>
          </h1>
          
          {/* The Choice Visualization */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            
            {/* Path 1: Status Quo Disaster */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-8 rounded-2xl border-2 border-red-300 dark:border-red-600">
              <div className="text-center">
                <div className="text-6xl mb-4">💀</div>
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">Build It Yourself</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-red-700 dark:text-red-300">
                    <span className="mr-3">❌</span>
                    <span>$2M+ minimum investment</span>
                  </div>
                  <div className="flex items-center text-red-700 dark:text-red-300">
                    <span className="mr-3">❌</span>
                    <span>18+ months until results</span>
                  </div>
                  <div className="flex items-center text-red-700 dark:text-red-300">
                    <span className="mr-3">❌</span>
                    <span>73% failure rate</span>
                  </div>
                  <div className="flex items-center text-red-700 dark:text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Competitors capture market</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Path 2: Partnership Success */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-800/30 p-8 rounded-2xl border-2 border-green-300 dark:border-green-600 relative overflow-hidden">
              {/* Winner Badge */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                WINNER
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">Partner With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <span className="mr-3">✅</span>
                    <span>$0 upfront investment</span>
                  </div>
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <span className="mr-3">✅</span>
                    <span>48 hours to deployment</span>
                  </div>
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <span className="mr-3">✅</span>
                    <span>100% proven success</span>
                  </div>
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <span className="mr-3">✅</span>
                    <span>Market domination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
              Partnership Proposal
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
              The question isn't IF you need logistics excellence...
              <br />
              <strong className="text-emerald-600 dark:text-emerald-400">The question is: Will you seize this moment?</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            Ready to Transform Logistics?
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            This partnership opportunity won't wait. Our network, your platform, unlimited potential.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <button
            onClick={onNext}
            className="bg-emerald-600 dark:bg-emerald-700 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Start Strategic Partnership
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:shadow-xl"
          >
            Schedule Pilot Program
          </a>
        </div>
        
        <div className="pt-8 text-gray-700 dark:text-gray-300">
          <p>
            Questions? Contact our partnership team at
            {' '}<strong>{PARTNERSHIPS_EMAIL}</strong>
            {' '}or schedule a call via
            {' '}<a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="underline">Calendly</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProposal;