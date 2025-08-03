'use client'

import React from 'react'

import {
  ArrowDownToLine,
  ArrowUpDown,
  Bell,
  Building2,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  Fingerprint,
  Link2,
  Lock,
  Mail,
  MessageSquare,
  PieChart,
  Send,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  UserPlus,
  Zap
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import FeaturesModal from '../modals/FeaturesModal'

const useLanguage = () => ({
  t: (key: string | number) => {
  const translations: { [key: string]: string } = {
      // Features translations
      'features-badge': 'Fonctionnalités',
      'features-title': 'Tout ce dont vous avez besoin',
      'features-description': 'Une suite complète d\'outils financiers pour simplifier votre vie',
      'payments': 'Paiements',
      'security': 'Sécurité',
      'account': 'Compte',
      'virtual-cards-title': 'Cartes Virtuelles',
      'virtual-cards-description': 'Créez des cartes virtuelles instantanément pour vos achats en ligne sécurisés',
      'instant-transfers-title': 'Transferts Instantanés',
      'instant-transfers-description': 'Envoyez et recevez de l\'argent en temps réel, même sans internet',
      'nfc-payments-title': 'Paiements NFC',
      'nfc-payments-description': 'Payez en un simple contact avec votre téléphone ou carte RFID',
      'secure-auth-title': 'Authentification Sécurisée',
      'secure-auth-description': 'Protection multi-niveaux avec vérification en deux étapes',
      'biometric-title': 'Biométrie Avancée',
      'biometric-description': 'Déverrouillez votre compte avec votre empreinte ou reconnaissance faciale',
      'encryption-title': 'Chiffrement Bancaire',
      'encryption-title-description': 'Vos données sont protégées par le même niveau de sécurité que les banques',
      'expense-tracking-title': 'Suivi des Dépenses',
      'expense-tracking-description': 'Analysez vos habitudes de consommation avec des graphiques détaillés',
      'savings-goals-title': 'Objectifs d\'Épargne',
      'savings-goals-description': 'Définissez et atteignez vos objectifs financiers avec des outils intelligents',
      'smart-notifications-title': 'Notifications Intelligentes',
      'smart-notifications-description': 'Recevez des alertes personnalisées pour optimiser vos finances',
      
      // How It Works translations
      'how-it-works-badge': 'Processus Simple',
      'how-it-works-title': 'Votre Parcours Financier Commence Ici',
      'how-it-works-description': 'Commencer avec NexusPay est rapide et facile. Notre processus d\'intégration optimisé vous permet de profiter des avantages des paiements sans espèces en quelques minutes, pas en jours.',
      'step1-title': 'Créez Votre Compte',
      'step1-description': 'Téléchargez l\'application NexusPay et complétez un processus d\'inscription simple. Notre système de vérification avancé assure que votre identité est confirmée rapidement et en toute sécurité.',
      'step2-title': 'Liez Vos Méthodes de Paiement',
      'step2-description': 'Connectez vos sources de paiement préférées à votre compte NexusPay. Nous supportons les virements bancaires, Orange Money, MTN Mobile Money, et d\'autres méthodes de paiement locales populaires.',
      'step3-title': 'Profitez de la Liberté Financière',
      'step3-description': 'Commencez à utiliser NexusPay pour vos transactions quotidiennes. Envoyez de l\'argent à vos amis et famille, payez vos factures, achetez en ligne et en magasin, et gérez vos finances depuis une seule application intuitive.',
      'signup': 'S\'inscrire',
      'create-account': 'Créer un Compte',
      'add-funds': 'Ajouter des Fonds',
      'orange-money': 'Orange Money',
      'mtn-money': 'MTN Mobile Money',
      'bank-transfer': 'Virement Bancaire',
      'continue': 'Continuer',
      'dashboard': 'Tableau de Bord',
      'your-balance': 'Votre Solde',
      'debit': 'Débit',
      'send': 'Envoyer',
      'receive': 'Recevoir',
      'request': 'Demander'
    }
    return translations[key] || key
  }
})

const Features = () => {
  const { t } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const sectionRef = useRef(null)
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<FeatureTabs>('payments')

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tabs: { id: FeatureTabs; label: string | number; icon: React.ReactElement }[] = [
    { id: 'payments', label: t('payments'), icon: <CreditCard className="w-5 h-5" /> },
    { id: 'security', label: t('security'), icon: <Shield className="w-5 h-5" /> },
    { id: 'account', label: t('account'), icon: <PieChart className="w-5 h-5" /> }
  ]

  const featuresData = {
    payments: [
      {
        icon: <CreditCard className="w-8 h-8" />,
        title: t('virtual-cards-title'),
        description: t('virtual-cards-description'),
        color: 'from-[#0ABAB5] to-[#56DFCF]',
        bgColor: 'from-[#0ABAB5]/10 to-[#56DFCF]/10',
        borderColor: 'border-[#0ABAB5]/20'
      },
      {
        icon: <ArrowUpDown className="w-8 h-8" />,
        title: t('instant-transfers-title'),
        description: t('instant-transfers-description'),
        color: 'from-[#56DFCF] to-[#ADEED9]',
        bgColor: 'from-[#56DFCF]/10 to-[#ADEED9]/10',
        borderColor: 'border-[#56DFCF]/20'
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: t('nfc-payments-title'),
        description: t('nfc-payments-description'),
        color: 'from-[#ADEED9] to-[#0ABAB5]',
        bgColor: 'from-[#ADEED9]/10 to-[#0ABAB5]/10',
        borderColor: 'border-[#ADEED9]/20'
      }
    ],
    security: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: t('secure-auth-title'),
        description: t('secure-auth-description'),
        color: 'from-[#0ABAB5] to-[#56DFCF]',
        bgColor: 'from-[#0ABAB5]/10 to-[#56DFCF]/10',
        borderColor: 'border-[#0ABAB5]/20'
      },
      {
        icon: <Fingerprint className="w-8 h-8" />,
        title: t('biometric-title'),
        description: t('biometric-description'),
        color: 'from-[#56DFCF] to-[#ADEED9]',
        bgColor: 'from-[#56DFCF]/10 to-[#ADEED9]/10',
        borderColor: 'border-[#56DFCF]/20'
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: t('encryption-title'),
        description: t('encryption-title-description'),
        color: 'from-[#ADEED9] to-[#0ABAB5]',
        bgColor: 'from-[#ADEED9]/10 to-[#0ABAB5]/10',
        borderColor: 'border-[#ADEED9]/20'
      }
    ],
    account: [
      {
        icon: <PieChart className="w-8 h-8" />,
        title: t('expense-tracking-title'),
        description: t('expense-tracking-description'),
        color: 'from-[#0ABAB5] to-[#56DFCF]',
        bgColor: 'from-[#0ABAB5]/10 to-[#56DFCF]/10',
        borderColor: 'border-[#0ABAB5]/20'
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: t('savings-goals-title'),
        description: t('savings-goals-description'),
        color: 'from-[#56DFCF] to-[#ADEED9]',
        bgColor: 'from-[#56DFCF]/10 to-[#ADEED9]/10',
        borderColor: 'border-[#56DFCF]/20'
      },
      {
        icon: <Bell className="w-8 h-8" />,
        title: t('smart-notifications-title'),
        description: t('smart-notifications-description'),
        color: 'from-[#ADEED9] to-[#0ABAB5]',
        bgColor: 'from-[#ADEED9]/10 to-[#0ABAB5]/10',
        borderColor: 'border-[#ADEED9]/20'
      }
    ]
  }

  type FeatureTabs = 'payments' | 'security' | 'account'


const currentFeatures = featuresData[activeTab]  // OK, pas d'erreur TS


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

        @keyframes progressLine {
          from {
            width: 0%;
          }
          to {
            width: 66.67%;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-progressLine {
          animation: progressLine 2s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse 2s ease-in-out infinite;
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .step-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .floating-icon {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0ABAB5]/10 to-[#56DFCF]/10 rounded-full mb-8 border border-[#0ABAB5]/20 backdrop-blur-sm">
              <Smartphone className="w-5 h-5 mr-3 text-[#7A85C1]" />
              <span className="text-sm from-primary to-primary-dark font-semibold tracking-wide uppercase">
                {t('features-badge')}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {t('features-title')}
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('features-description')}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex bg-white/60 backdrop-blur-lg rounded-2xl p-2 border border-[#0ABAB5]/20 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#7A85C1] to-primary-dark text-white shadow-lg shadow-[#0ABAB5]/25 scale-105'
                      : 'text-gray-600 hover:text-[#0ABAB5] hover:bg-white/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-700 cursor-pointer overflow-hidden transform hover:-translate-y-4 hover:scale-105 ${
                  feature.borderColor
                } ${
                  hoveredCard === index
                    ? `bg-gradient-to-br ${feature.bgColor} shadow-2xl shadow-[#0ABAB5]/20`
                    : 'bg-white/70 hover:bg-white/90 shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 flex items-center justify-center mb-8 rounded-2xl transition-all duration-500 transform group-hover:scale-110 ${
                    hoveredCard === index
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-xl`
                      : 'bg-gradient-to-r from-[#0ABAB5]/10 to-[#56DFCF]/10 text-[#0ABAB5]'
                  }`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-[#0ABAB5] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className={`flex items-center text-sm font-semibold transition-all duration-300 ${
                    hoveredCard === index ? 'text-[#0ABAB5]' : 'text-gray-500'
                  }`}>
                    <span className="mr-2">En savoir plus</span>
                    <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-2' : ''
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#7A85C1] to-[#56DFCF] rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0ABAB5]/30 transition-all duration-500 transform hover:scale-110"
              onClick={() => setIsFeaturesModalOpen(true)}>
                <CheckCircle2 className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Voir toutes les fonctionnalités
            </button>
          </div>
        </div>
      </section>
     

      {/* How It Works Section */}
      <section ref={sectionRef} id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-white via-[#FFEDF3]/30 to-[#ADEED9]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#56DFCF]/10 to-[#ADEED9]/10 rounded-full mb-8 border border-[#56DFCF]/20">
              <Zap className="w-5 h-5 mr-3 text-[#56DFCF] floating-icon" />
              <span className="text-sm text-[#56DFCF] font-semibold tracking-wide uppercase">
                {t('how-it-works-badge')}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {t('how-it-works-title')}
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('how-it-works-description')}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 z-0 rounded-full">
              <div className={`h-full bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full ${isVisible ? 'animate-progressLine' : 'w-0'}`}></div>
            </div>

            {/* Step 1 */}
            <div className={`flex flex-col items-center text-center relative z-10 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className={`w-24 h-24 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full flex items-center justify-center mb-8 text-3xl font-bold shadow-2xl transform transition-all duration-500 ${hoveredStep === 0 ? 'scale-110 animate-pulse-gentle' : 'animate-bounce-gentle'}`}
                   onMouseEnter={() => setHoveredStep(0)}
                   onMouseLeave={() => setHoveredStep(null)}>
                1
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('step1-title')}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('step1-description')}
              </p>

              {/* Interactive Card */}
              <div className="step-card w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-[#0ABAB5]/10 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#0ABAB5]/5 to-[#56DFCF]/5">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <UserPlus className="w-5 h-5 mr-2 text-[#0ABAB5]" />
                    {t('signup')}
                  </h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nom Complet"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Adresse Email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mot de Passe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/20 transition-all pr-10"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0ABAB5] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-[#0ABAB5]/25 transition-all duration-300 transform hover:scale-105">
                    {t('create-account')}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`flex flex-col items-center text-center relative z-10 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <div className={`w-24 h-24 bg-gradient-to-r from-[#56DFCF] to-[#ADEED9] text-white rounded-full flex items-center justify-center mb-8 text-3xl font-bold shadow-2xl transform transition-all duration-500 ${hoveredStep === 1 ? 'scale-110 animate-pulse-gentle' : 'animate-bounce-gentle'}`}
                   onMouseEnter={() => setHoveredStep(1)}
                   onMouseLeave={() => setHoveredStep(null)}
                   style={{animationDelay: '0.5s'}}>
                2
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('step2-title')}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('step2-description')}
              </p>

              {/* Interactive Card */}
              <div className="step-card w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-[#56DFCF]/10 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#56DFCF]/5 to-[#ADEED9]/5">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Link2 className="w-5 h-5 mr-2 text-[#56DFCF]" />
                    {t('add-funds')}
                  </h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl cursor-pointer hover:shadow-md transition-all transform hover:scale-105 group">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mr-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-800">{t('orange-money')}</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl cursor-pointer hover:shadow-md transition-all transform hover:scale-105 group">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full mr-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-800">{t('mtn-money')}</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl cursor-pointer hover:shadow-md transition-all transform hover:scale-105 group">
                    <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-800">{t('bank-transfer')}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#56DFCF] to-[#ADEED9] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-[#56DFCF]/25 transition-all duration-300 transform hover:scale-105">
                    {t('continue')}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`flex flex-col items-center text-center relative z-10 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              <div className={`w-24 h-24 bg-gradient-to-r from-[#ADEED9] to-[#0ABAB5] text-white rounded-full flex items-center justify-center mb-8 text-3xl font-bold shadow-2xl transform transition-all duration-500 ${hoveredStep === 2 ? 'scale-110 animate-pulse-gentle' : 'animate-bounce-gentle'}`}
                   onMouseEnter={() => setHoveredStep(2)}
                   onMouseLeave={() => setHoveredStep(null)}
                   style={{animationDelay: '1s'}}>
                3
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('step3-title')}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('step3-description')}
              </p>

              {/* Interactive Card */}
              <div className="step-card w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-[#ADEED9]/10 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#ADEED9]/5 to-[#0ABAB5]/5">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-[#ADEED9]" />
                    {t('dashboard')}
                  </h4>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">{t('your-balance')}</div>
                    <div className="text-3xl font-bold text-gray-800">27 500.00 F</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-xl p-4 text-white mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
                    <div className="text-sm opacity-80 mb-2">{t('debit')}</div>
                    <div className="text-xl font-semibold mb-4">129 700.00 F</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">**** **** 7745</div>
                      <div className="text-sm">10/28</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white text-center py-2 px-3 rounded-lg hover:shadow-md transition-all transform hover:scale-105 flex items-center justify-center">
                      <Send className="w-4 h-4 mr-1" />
                      <span className="text-xs">{t('send')}</span>
                    </button>
                    <button className="bg-gradient-to-r from-[#56DFCF] to-[#ADEED9] text-white text-center py-2 px-3 rounded-lg hover:shadow-md transition-all transform hover:scale-105 flex items-center justify-center">
                      <ArrowDownToLine className="w-4 h-4 mr-1" />
                      <span className="text-xs">{t('receive')}</span>
                    </button>
                    <button className="bg-gradient-to-r from-[#ADEED9] to-[#0ABAB5] text-white text-center py-2 px-3 rounded-lg hover:shadow-md transition-all transform hover:scale-105 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span className="text-xs">{t('request')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0ABAB5]/30 transition-all duration-500 transform hover:scale-110 relative overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Commencer Maintenant</span>
              <Sparkles className="w-5 h-5 ml-3 group-hover:animate-spin" />
            </button>
          </div>
        </div>
      </section>
      <FeaturesModal
        isOpen={isFeaturesModalOpen}
        onClose={() => setIsFeaturesModalOpen(false)}
      />
    </>
    
  )
}

export default Features