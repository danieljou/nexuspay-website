'use client'

import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'


interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { user, logout } = useAuth()
  const { t } = useLanguage()

  if (!isOpen) return null

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div className="md:hidden bg-theme-primary border-t border-theme">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex flex-col space-y-3">
          <a 
            href="#features" 
            className="nav-link py-2" 
            onClick={handleLinkClick}
          >
            {t('features')}
          </a>
          <a 
            href="#how-it-works" 
            className="nav-link py-2" 
            onClick={handleLinkClick}
          >
            {t('how-it-works')}
          </a>
          <a 
            href="#about-us" 
            className="nav-link py-2" 
            onClick={handleLinkClick}
          >
            {t('about-us')}
          </a>
          <a 
            href="#testimonials" 
            className="nav-link py-2" 
            onClick={handleLinkClick}
          >
            {t('testimonials')}
          </a>
          <a 
            href="#contact-us" 
            className="nav-link py-2" 
            onClick={handleLinkClick}
          >
            {t('contact-us')}
          </a>
          
          {user ? (
            <div className="pt-3 border-t border-theme">
              <p className="text-theme-primary font-medium mb-2">
                Welcome, {user.first_name}!
              </p>
              <button 
                onClick={() => { logout(); handleLinkClick(); }}
                className="nav-link py-2 text-left w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-theme">
              <button className="nav-link py-2 text-left w-full">
                {t('login')}
              </button>
              <button className="btn btn-primary mt-2 w-full">
                {t('signup')}
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}