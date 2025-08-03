'use client'

import { useEffect } from 'react'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import AIAssistantModal from '../../components/modals/AIAssistantModal'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import AboutUs from '../../components/sections/AboutUs'
import Contact from '../../components/sections/Contact'
import Download from '../../components/sections/Download'
import Features from '../../components/sections/Features'
import Hero from '../../components/sections/Hero'
import HowItWorks from '../../components/sections/HowItWorks'
import Testimonials from '../../components/sections/Testimonials'

export default function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingOverlay = document.getElementById('loadingOverlay')
      if (loadingOverlay) {
        loadingOverlay.style.opacity = '0'
        setTimeout(() => {
          loadingOverlay.style.display = 'none'
        }, 500)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading overlay */}
      <div id="loadingOverlay" className="p-40fixed inset-0 bg-theme-primary z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-primary">
            <svg className="w-16 h-16 mx-auto animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-theme-primary">Loading NexusPay</h2>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
        <Contact />
        <Download />
      </main>
      <Footer />
      
      {/* Modals */}
      <LoginModal isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } onSwitchToSignup={function (): void {
        throw new Error('Function not implemented.')
      } } />
      <SignupModal isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } onSwitchToLogin={function (): void {
        throw new Error('Function not implemented.')
      } } />
      <AIAssistantModal isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </>
  )
}