'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Heart,
  Shield,
  Award,
  Zap
} from 'lucide-react'

// Mock useLanguage hook - replace with your actual implementation
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      'footer-description': 'Votre partenaire de confiance pour des solutions financières modernes et sécurisées au Cameroun.',
      'company': 'Entreprise',
      'resources': 'Ressources',
      'legal': 'Légal',
      'about-us-footer': 'À Propos',
      'careers': 'Carrières',
      'press': 'Presse',
      'blog': 'Blog',
      'support-center': 'Centre d\'Aide',
      'documentation': 'Documentation',
      'security': 'Sécurité',
      'api': 'API Développeur',
      'terms': 'Conditions d\'Utilisation',
      'privacy': 'Politique de Confidentialité',
      'compliance': 'Conformité',
      'copyright': '© 2024 NexusPay. Tous droits réservés. Sous licence BEAC.',
      'selected-language': 'Français',
      'contact-us-footer': 'Contactez-nous',
      'newsletter-title': 'Restez Informé',
      'newsletter-desc': 'Recevez les dernières actualités et mises à jour',
      'newsletter-placeholder': 'Votre adresse email',
      'subscribe': 'S\'abonner',
      'made-with': 'Fait avec',
      'in-cameroon': 'au Cameroun'
    }
    return translations[key] || key
  },
  setLanguage: (lang: string) => {
    console.log('Language set to:', lang)
  }
})

export default function Footer() {
  const { t, setLanguage } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribing(false)
    setEmail('')
    // Show success message (you can implement toast/notification)
  }

  const footerLinks = {
    company: [
      { key: 'about-us-footer', href: '#about-us' },
      { key: 'careers', href: '#' },
      { key: 'press', href: '#' },
      { key: 'blog', href: '#' }
    ],
    resources: [
      { key: 'support-center', href: '#' },
      { key: 'documentation', href: '#' },
      { key: 'security', href: '#' },
      { key: 'api', href: '#' }
    ],
    legal: [
      { key: 'terms', href: '#' },
      { key: 'privacy', href: '#' },
      { key: 'compliance', href: '#' }
    ]
  }

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      hoverColor: 'hover:text-sky-400'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
      hoverColor: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
      hoverColor: 'hover:text-blue-500'
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'support@nexuspay.cm'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+237 681 234 567'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Yaoundé, Cameroun'
    }
  ]

  const certifications = [
    { icon: <Shield className="w-4 h-4" />, text: 'ISO 27001' },
    { icon: <Award className="w-4 h-4" />, text: 'PCI DSS' },
    { icon: <Zap className="w-4 h-4" />, text: '256-bit SSL' }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes socialHover {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            transform: scale(1.05) rotate(-2deg);
          }
        }

        @keyframes linkHover {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-social-hover {
          animation: socialHover 0.3s ease-in-out forwards;
        }

        .animate-link-hover {
          animation: linkHover 0.2s ease-out forwards;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .footer-gradient {
          background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
          position: relative;
        }

        .footer-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        .link-group {
          transition: all 0.3s ease;
        }

        .link-group:hover {
          transform: translateY(-2px);
        }

        .social-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .newsletter-input {
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .language-dropdown {
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
        }

        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          opacity: 0.03;
          animation: bounce 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }
      `}</style>

      <footer 
        ref={footerRef}
        className="footer-gradient text-white py-16 px-4 relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className={`lg:col-span-2 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="flex items-center mb-6 group">
                <div className="text-2xl font-bold flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3 group-hover:animate-pulse-slow transition-all">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  Nexus<span className="text-primary">Pay</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                {t('footer-description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="mr-3 group-hover:text-primary transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`social-link w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className={`link-group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-slow"></div>
                {t('company')}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                      onMouseEnter={() => setHoveredLink(link.key)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <ArrowRight className={`w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        hoveredLink === link.key ? 'transform translate-x-1' : ''
                      }`} />
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className={`link-group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-slow"></div>
                {t('resources')}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                      onMouseEnter={() => setHoveredLink(link.key)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <ArrowRight className={`w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        hoveredLink === link.key ? 'transform translate-x-1' : ''
                      }`} />
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Newsletter */}
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              {/* Legal Links */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-slow"></div>
                  {t('legal')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        className="footer-link text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                        onMouseEnter={() => setHoveredLink(link.key)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <ArrowRight className={`w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                          hoveredLink === link.key ? 'transform translate-x-1' : ''
                        }`} />
                        {t(link.key)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  {t('newsletter-title')}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{t('newsletter-desc')}</p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter-placeholder')}
                    className="newsletter-input w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubscribing ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        {t('subscribe')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Security Certifications */}
          <div className={`border-t border-gray-800 pt-8 mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <div className="flex flex-wrap justify-center items-center space-x-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="mr-2 group-hover:text-primary transition-colors">
                    {cert.icon}
                  </div>
                  <span className="text-sm font-medium">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>{t('copyright')}</span>
            </div>

            {/* Made with Love */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>{t('made-with')}</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-heartbeat" />
              <span>{t('in-cameroon')}</span>
            </div>

            {/* Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="bg-gray-800 text-gray-400 py-3 px-4 rounded-lg border border-gray-700 flex items-center focus:outline-none focus:border-primary transition-all duration-300 hover:bg-gray-700 group"
              >
                <Globe className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                <span>{t('selected-language')}</span>
                {isLanguageDropdownOpen ? (
                  <ChevronUp className="w-4 h-4 ml-2 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2 transition-transform" />
                )}
              </button>

              {isLanguageDropdownOpen && (
                <div className={`absolute z-20 right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl backdrop-blur-sm ${
                  isLanguageDropdownOpen ? 'dropdown-enter-active' : 'dropdown-enter'
                }`}>
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => { setLanguage('en'); setIsLanguageDropdownOpen(false) }}
                        className="w-full text-left px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200 flex items-center group"
                      >
                        <div className="w-4 h-4 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                        English
                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { setLanguage('fr'); setIsLanguageDropdownOpen(false) }}
                        className="w-full text-left px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200 flex items-center group"
                      >
                        <div className="w-4 h-4 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                        Français
                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}