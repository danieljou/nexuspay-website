'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import nexusLogo from '../../public/images/nexuslogo.png' // Adjust path if needed
import Image from 'next/image'


export default function Download() {
  const { t } = useLanguage()
  const [downloadCount, setDownloadCount] = useState(0)
  const [dailyTransactions, setDailyTransactions] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const animateCounter = (setter:  (val: number) => void, target: number, duration = 2000) => {
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

    // Trigger visibility for animations
    setTimeout(() => {
      setIsVisible(true)
      animateCounter(setDownloadCount, 100)
      animateCounter(setDailyTransactions, 7)
    }, 500)
  }, [])

  const stats = [
    { value: `${downloadCount}K+`, label: t('downloads') },
    { value: '4.8', label: t('rating') },
    { value: '2K+', label: t('reviews') },
    { value: `${dailyTransactions}M+`, label: t('transactions-processed') }
  ]

  const downloadLinks = [
    {
      name: t('app-store'),
      href: '#',
      icon: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
    },
    {
      name: t('google-play'),
      href: '#',
      icon: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
    }
  ]

  const floatingElements = [
    { top: '10%', left: '5%', delay: '0s', duration: '3s' },
    { top: '20%', right: '8%', delay: '1s', duration: '4s' },
    { bottom: '15%', left: '10%', delay: '2s', duration: '3.5s' },
    { bottom: '25%', right: '5%', delay: '0.5s', duration: '4.5s' },
  ]

  return (
    <section id="download" className="py-20 px-4 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Floating background elements */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"
            style={{
              ...element,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl text-white border border-white/10 group hover:shadow-purple-500/20 transition-all duration-700">
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-sm"></div>
          
          <div className="relative z-10 md:flex">
            <div className="md:w-2/3 p-8 md:p-12 lg:p-16">
              {/* Badge */}
              <span className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm font-semibold text-sm mb-6 border border-white/20 transform transition-all duration-700 hover:scale-105 hover:bg-white/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {t('download-badge')}
              </span>
              
              {/* Title */}
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {t('download-title')}
              </h2>
              
              {/* Description */}
              <p className={`text-slate-200 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {t('download-description')}
              </p>
              
              {/* Download Links */}
              <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transform transition-all duration-700 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {downloadLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group/link bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-slate-800 font-semibold px-8 py-4 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-purple-200"
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="w-8 h-8 mr-3 p-1 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d={link.icon} />
                      </svg>
                    </div>
                    <span className="relative">
                      {link.name}
                      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></div>
                    </span>
                  </a>
                ))}
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center group/stat transform transition-all duration-700 hover:scale-110 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  >
                    <div className="relative">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent group-hover/stat:from-purple-300 group-hover/stat:to-blue-300 transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    <p className="text-slate-300 mt-2 text-sm md:text-base font-medium group-hover/stat:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side with animated icon */}
            <div className="md:w-1/3 flex items-center justify-center p-8 md:p-12 relative">
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-spin-slow blur-sm"></div>
                
                {/* Middle pulsing ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 animate-pulse"></div>
                
                {/* Main circle */}
                <div className={`w-56 h-56 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-purple-300/50 transition-all duration-700 transform ${
                  isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                }`}>
                  {/* Inner icon container */}
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={nexusLogo}
                      alt="Nexus Pay Logo"
                      width={80}
                      height={70}
                      className="rounded-md group-hover:text-purple-200 transition-colors duration-300 animate-float"
                    />
                    
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 15L10 5M14 19L19 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-8 left-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-12 left-8 w-2 h-2 bg-white rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-spin-slow,
          .animate-bounce,
          .animate-ping,
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}