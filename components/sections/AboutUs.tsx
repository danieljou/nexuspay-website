'use client'

import {
    ArrowRight,
    Award,
    Building,
    Calendar,
    Clock,
    Globe,
    Heart,
    MapPin,
    Shield,
    Sparkles,
    Star,
    Target,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Mock useLanguage hook - replace with your actual implementation
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      'about-us-badge': 'Notre Histoire',
      'about-us-title': 'L\'Équipe Derrière NexusPay',
      'about-us-description': 'Fondée en 2020, NexusPay a été créée pour répondre aux défis financiers uniques auxquels font face les Camerounais. Notre mission est de fournir des solutions financières accessibles, sécurisées et innovantes.',
      'our-vision': 'Notre Vision',
      'vision-p1': 'Chez NexusPay, nous envisageons un Cameroun où chaque personne a accès aux outils financiers modernes qui améliorent leur vie quotidienne.',
      'vision-p2': 'Notre équipe dédiée d\'experts financiers et d\'innovateurs technologiques travaille sans relâche pour créer des solutions qui répondent aux défis uniques du marché camerounais.',
      'founded': 'Fondée en 2020',
      'founded-description': 'Lancée avec la mission de transformer l\'accessibilité financière au Cameroun',
      'team': 'Équipe Diversifiée',
      'team-description': 'Un groupe talentueux d\'experts financiers, d\'ingénieurs et de spécialistes de l\'expérience client',
      'headquarters': 'Siège à Yaoundé',
      'headquarters-description': 'Avec des bureaux régionaux à Douala, Bamenda et Buea pour servir tout le Cameroun',
      'our-values': 'Nos Valeurs Fondamentales',
      'value1-title': 'Confiance',
      'value1-description': 'Construire des systèmes fiables et des relations transparentes avec nos utilisateurs',
      'value2-title': 'Innovation',
      'value2-description': 'Explorer constamment de nouvelles technologies et approches pour améliorer notre service',
      'value3-title': 'Inclusion',
      'value3-description': 'Créer des solutions financières accessibles à tous les Camerounais, quel que soit leur origine',
      'value4-title': 'Focus Local',
      'value4-description': 'Développer des solutions spécifiquement adaptées au contexte et aux besoins camerounais',
      'active-users': 'Utilisateurs Actifs',
      'transactions': 'Transactions',
      'merchants': 'Marchands Partenaires',
      'support': 'Support Client'
    }
    return translations[key] || key
  }
})

export default function AboutUs() {
  const { t } = useLanguage()
  const [userCount, setUserCount] = useState(0)
  const [transactionCount, setTransactionCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

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

  // Animated counters
  useEffect(() => {
    const animateCounter = (setter:  (val: number) => void , target: number, duration = 2000) => {
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

    if (isVisible) {
      setTimeout(() => {
        animateCounter(setUserCount, 100)
        animateCounter(setTransactionCount, 15)
      }, 500)
    }
  }, [isVisible])


  const milestones = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('founded'),
      description: t('founded-description'),
      year: '2020',
      color: 'from-[#0ABAB5] to-[#56DFCF]'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('team'),
      description: t('team-description'),
      year: '2021',
      color: 'from-[#56DFCF] to-[#ADEED9]'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: t('headquarters'),
      description: t('headquarters-description'),
      year: '2022',
      color: 'from-[#ADEED9] to-[#0ABAB5]'
    }
  ]

    // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % milestones.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [milestones.length])


  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('value1-title'),
      description: t('value1-description'),
      color: 'from-[#0ABAB5] to-[#56DFCF]',
      bgColor: 'from-[#0ABAB5]/5 to-[#56DFCF]/5'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('value2-title'),
      description: t('value2-description'),
      color: 'from-[#56DFCF] to-[#ADEED9]',
      bgColor: 'from-[#56DFCF]/5 to-[#ADEED9]/5'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('value3-title'),
      description: t('value3-description'),
      color: 'from-[#ADEED9] to-[#0ABAB5]',
      bgColor: 'from-[#ADEED9]/5 to-[#0ABAB5]/5'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('value4-title'),
      description: t('value4-description'),
      color: 'from-[#0ABAB5] to-[#ADEED9]',
      bgColor: 'from-[#0ABAB5]/5 to-[#ADEED9]/5'
    }
  ]

  const stats = [
    { 
      value: `${userCount}K+`, 
      label: t('active-users'),
      icon: <Users className="w-6 h-6" />,
      color: '#0ABAB5'
    },
    { 
      value: `${transactionCount}M+`, 
      label: t('transactions'),
      icon: <TrendingUp className="w-6 h-6" />,
      color: '#56DFCF'
    },
    { 
      value: '250+', 
      label: t('merchants'),
      icon: <Award className="w-6 h-6" />,
      color: '#ADEED9'
    },
    { 
      value: '24/7', 
      label: t('support'),
      icon: <Target className="w-6 h-6" />,
      color: '#0ABAB5'
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(10, 186, 181, 0.3); }
          50% { box-shadow: 0 0 30px rgba(10, 186, 181, 0.6); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-countUp {
          animation: countUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulseGlow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .pattern-dots {
          background-image: radial-gradient(circle, rgba(10, 186, 181, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .timeline-line {
          background: linear-gradient(to bottom, #0ABAB5, #56DFCF, #ADEED9);
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) { animation-delay: 0s; }
        .floating-shape:nth-child(2) { animation-delay: 2s; }
        .floating-shape:nth-child(3) { animation-delay: 4s; }
      `}</style>

      <section 
        ref={sectionRef}
        id="about-us" 
        className="py-20 px-4 bg-gradient-to-br from-[#FFEDF3] via-white to-[#ADEED9]/10 relative overflow-hidden"
      >
        {/* Pattern Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pattern-dots"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0ABAB5]/10 to-[#56DFCF]/10 rounded-full mb-8 border border-[#0ABAB5]/20 backdrop-blur-sm">
              <Calendar className="w-5 h-5 mr-3 text-[#0ABAB5] animate-bounce-slow" />
              <span className="text-sm text-[#0ABAB5] font-semibold tracking-wide uppercase">
                {t('about-us-badge')}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {t('about-us-title')}
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about-us-description')}
            </p>

            {/* Decorative Elements */}
            <div className="mt-12 flex items-center justify-center space-x-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full"></div>
              <Sparkles className="w-6 h-6 text-[#56DFCF] animate-rotate" />
              <div className="h-1 w-16 bg-gradient-to-r from-[#56DFCF] to-[#ADEED9] rounded-full"></div>
            </div>
          </div>

          {/* Vision & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
            {/* Vision Text */}
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'} space-y-8`}>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-[#0ABAB5]" />
                  {t('our-vision')}
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">{t('vision-p1')}</p>
                  <p className="text-lg">{t('vision-p2')}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 group ${
                      isVisible ? 'animate-countUp' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center mb-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:animate-pulseGlow transition-all"
                        style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <p className="text-gray-600 text-sm font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'} relative`}>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-12 bottom-12 w-1 timeline-line rounded-full"></div>

                {/* Timeline Items */}
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start mb-12 cursor-pointer transition-all duration-500 ${
                      activeTimeline === index ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    {/* Timeline Dot */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10 transition-all duration-500 ${
                      activeTimeline === index 
                        ? `bg-gradient-to-r ${milestone.color} animate-pulseGlow shadow-2xl` 
                        : 'bg-gray-300'
                    }`}>
                      {activeTimeline === index ? milestone.icon : milestone.year}
                    </div>

                    {/* Content Card */}
                    <div className={`ml-6 p-6 rounded-2xl shadow-lg border transition-all duration-500 ${
                      activeTimeline === index 
                        ? `bg-gradient-to-r ${milestone.color.replace('from-', 'from-').replace('to-', 'to-')}/10 border-current shadow-xl` 
                        : 'bg-white border-gray-200 hover:shadow-md'
                    }`}>
                      <div className="relative overflow-hidden">
                        {activeTimeline === index && (
                          <div className="absolute inset-0 shimmer-effect rounded-xl"></div>
                        )}
                        <h4 className={`font-bold text-lg mb-2 transition-colors ${
                          activeTimeline === index ? 'text-[#0ABAB5]' : 'text-gray-800'
                        }`}>
                          {milestone.title}
                        </h4>
                        <p className={`transition-colors ${
                          activeTimeline === index ? 'text-gray-700' : 'text-gray-600'
                        }`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Background Circle */}
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 bg-gradient-to-br from-[#0ABAB5] to-[#ADEED9] blur-3xl animate-pulse"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`max-w-7xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 text-gray-800 flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-[#0ABAB5] animate-bounce-slow" />
                {t('our-values')}
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl border-2 border-transparent transition-all duration-700 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-2 ${
                    hoveredValue === index
                      ? `bg-gradient-to-br ${value.bgColor} border-[#0ABAB5]/30 shadow-2xl`
                      : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background Glow */}
                  {hoveredValue === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/5 to-[#ADEED9]/5 blur-xl"></div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto flex items-center justify-center mb-6 rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 ${
                      hoveredValue === index
                        ? `bg-gradient-to-r ${value.color} text-white shadow-2xl animate-pulseGlow`
                        : 'bg-gradient-to-r from-[#0ABAB5]/10 to-[#56DFCF]/10 text-[#0ABAB5]'
                    }`}>
                      {value.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#0ABAB5] transition-colors">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      {value.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className={`mt-4 flex items-center justify-center transition-all duration-300 ${
                      hoveredValue === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}>
                      <span className="text-sm font-semibold text-[#0ABAB5] mr-2">En savoir plus</span>
                      <ArrowRight className="w-4 h-4 text-[#0ABAB5]" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  {hoveredValue === index && (
                    <>
                      <Sparkles className="absolute top-4 right-4 w-4 h-4 text-[#0ABAB5] animate-bounce-slow" />
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#56DFCF] rounded-full animate-pulse"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
            <button className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 overflow-hidden">
              <div className="absolute inset-0 shimmer-effect"></div>
              <MapPin className="w-6 h-6 mr-3 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Rejoignez Notre Mission</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}