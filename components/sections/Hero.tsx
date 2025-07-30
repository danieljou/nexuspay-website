'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import PhoneMockup from '../mockup/PhoneMockup'

export default function Hero() {
  const { t } = useLanguage()
  const [activeUsers, setActiveUsers] = useState(0)
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    // Animate counters
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const animateCounter = (setter: Function, target: number, duration = 2000) => {
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setter(Math.floor(current))
      }, 16)
    }

    setTimeout(() => {
      animateCounter(setActiveUsers, 100)
      animateCounter(setTotalTransactions, 15)
      animateCounter(setUptime, 99.9)
    }, 1000)
  }, [])

  return (
    <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 slide-up">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
              Secure • Trusted • Innovative
            </div>
            
            {/* Hero Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-theme-primary">
              <span>{t('hero-title-1')}<span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {t('hero-title-2')}
              </span></span>
              
              <span>{t('hero-title-3')}</span>
            </h1>
            
            {/* Hero Description */}
            <p className="text-lg md:text-xl text-theme-secondary mb-8 leading-relaxed">
              {t('hero-description')}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="btn btn-primary px-8 py-4 text-lg">
                <span>{t('get-started') || 'Start Banking Now'}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a href="#demo" className="btn btn-outline px-8 py-4 text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5v.01M12 19v.01" />
                </svg>
                {t('try-demo') || 'Try Live Demo'}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{activeUsers}K+</div>
                <div className="text-sm text-theme-tertiary">{t('active-users') || 'Active Users'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₣{totalTransactions}M+</div>
                <div className="text-sm text-theme-tertiary">{t('transactions') || 'Transactions'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{uptime}%</div>
                <div className="text-sm text-theme-tertiary">{t('uptime') || 'Uptime'}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center fade-in">
            <div className="w-full max-w-md relative">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}