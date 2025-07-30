'use client'

import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import MobileMenu from './MobileMenu'
import LoginModal from '../modals/LoginModal'
import SignupModal from '../modals/SignupModal' // Make sure this is the right path

import Image from 'next/image'
import nexusLogo from '../../public/images/nexuslogo.png' // Adjust path if needed

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-theme-primary/90 backdrop-blur-md border-b border-theme">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#top"
            className="nav-link relative group transition-transform duration-200 hover:scale-105"
          >
            <Image src={nexusLogo} alt="Nexus Pay Logo" width={80} height={70} className="rounded-md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-lg font-medium">
            <a
              href="#features"
              className="nav-link relative group transition-transform duration-200 hover:scale-105"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {t('features')}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#how-it-works"
              className="nav-link relative group transition-transform duration-200 hover:scale-105"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {t('how-it-works') || 'Comment ca marche'}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>


            <a
              href="#about-us"
              className="nav-link relative group transition-transform duration-200 hover:scale-105"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {t('about-us')}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact-us"
              className="nav-link relative group transition-transform duration-200 hover:scale-105"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {t('contact-us') || 'Contact'}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#download"
              className="nav-link relative group transition-transform duration-200 hover:scale-105"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {t('download') || 'download'}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>


          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-theme-tertiary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center text-theme-primary"
                aria-label="Select language"
              >
                <span>{language.toUpperCase()}</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-theme-primary border border-theme shadow-theme rounded-lg z-50">
                  <ul>
                    <li>
                      <button
                        onClick={() => { setLanguage('en'); setIsLanguageDropdownOpen(false) }}
                        className="w-full text-left px-4 py-2 hover:bg-theme-tertiary rounded-t-lg"
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { setLanguage('fr'); setIsLanguageDropdownOpen(false) }}
                        className="w-full text-left px-4 py-2 hover:bg-theme-tertiary rounded-b-lg"
                      >
                        Français
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button id="aiAssistantBtn" class="btn btn-outline hidden sm:flex">
                        <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        AI Help
            </button>

            {/* Auth Controls */}
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="hidden sm:block text-theme-primary">{user.first_name}</span>
                <button onClick={logout} className="btn btn-secondary">Logout</button>
              </div>
            ) : (
              <>
                <button className="hidden sm:block nav-link font-medium" onClick={() => setIsLoginModalOpen(true)}>
                  {t('login') || 'Sign In'}
                </button>
                <button className="btn btn-primary hidden sm:flex" onClick={() => setIsSignupModalOpen(true)}>
                  {t('signup') || 'Get Started Free'}
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-theme-primary focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
    
    <SignupModal
      isOpen={isSignupModalOpen}
      onClose={() => setIsSignupModalOpen(false)}
      onSwitchToLogin={() => {
        setIsSignupModalOpen(false)
        setIsLoginModalOpen(true)
      }}
    />

    <LoginModal
      isOpen={isLoginModalOpen}
      onClose={() => setIsLoginModalOpen(false)}
      onSwitchToSignup={() => {
        setIsLoginModalOpen(false)
        setIsSignupModalOpen(true)
      }}
    />
  </>
  )
}
