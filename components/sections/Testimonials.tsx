'use client'

import { useEffect, useState, useRef } from 'react'
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Heart,
  MessageCircle,
  Award,
  TrendingUp
} from 'lucide-react'

// Mock useLanguage hook - replace with your actual implementation
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      'testimonials-badge': 'Témoignages',
      'testimonials-title': 'Ce Que Disent Nos Clients',
      'testimonials-description': 'Découvrez comment NexusPay transforme la vie financière de milliers de Camerounais chaque jour.',
      'testimonial1-text': 'NexusPay a complètement changé ma façon de gérer mes finances. Les transferts sont instantanés et les frais sont très abordables. Je recommande vivement!',
      'testimonial1-name': 'Marie Atangana',
      'testimonial1-position': 'Commerçante, Yaoundé',
      'testimonial2-text': 'Grâce à NexusPay, je peux envoyer de l\'argent à ma famille en quelques secondes. L\'interface est simple et sécurisée. Excellent service!',
      'testimonial2-name': 'Jean Mbarga',
      'testimonial2-position': 'Étudiant, Douala',
      'testimonial3-text': 'En tant qu\'entrepreneur, NexusPay me facilite énormément les paiements avec mes clients. Le support client est également exceptionnel.',
      'testimonial3-name': 'Françoise Tchouta',
      'testimonial3-position': 'Entrepreneure, Bamenda'
    }
    return translations[key] || key
  }
})

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      text: t('testimonial1-text'),
      name: t('testimonial1-name'),
      position: t('testimonial1-position'),
      initials: 'MA',
      rating: 5,
      date: '2 semaines',
      verified: true
    },
    {
      text: t('testimonial2-text'),
      name: t('testimonial2-name'),
      position: t('testimonial2-position'),
      initials: 'JM',
      rating: 5,
      date: '1 mois',
      verified: true
    },
    {
      text: t('testimonial3-text'),
      name: t('testimonial3-name'),
      position: t('testimonial3-position'),
      initials: 'FT',
      rating: 5,
      date: '3 semaines',
      verified: true
    }
  ]

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

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length, isPlaying])

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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

        @keyframes starTwinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes quoteBounce {
          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-5px) rotate(5deg);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px var(--shadow-color);
          }
          50% {
            box-shadow: 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color);
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-starTwinkle {
          animation: starTwinkle 2s ease-in-out infinite;
        }

        .animate-quoteBounce {
          animation: quoteBounce 3s ease-in-out infinite;
        }

        .animate-cardFloat {
          animation: cardFloat 4s ease-in-out infinite;
        }

        .animate-pulseGlow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-progressBar {
          animation: progressBar 5s linear;
        }

        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .star-rating {
          filter: drop-shadow(0 2px 4px rgba(255, 193, 7, 0.3));
        }

        .quote-decoration {
          background: linear-gradient(45deg, var(--primary), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-counter {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .floating-elements {
          position: absolute;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          opacity: 0.1;
          animation: cardFloat 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) { animation-delay: 0s; }
        .floating-element:nth-child(2) { animation-delay: 2s; }
        .floating-element:nth-child(3) { animation-delay: 4s; }
      `}</style>

      <section 
        ref={sectionRef}
        id="testimonials" 
        className="py-20 px-4 bg-bg-secondary relative overflow-hidden"
      >

        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pattern-dots"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 border border-primary/30">
              <MessageCircle className="w-4 h-4 mr-2 animate-starTwinkle" />
              <span className="tracking-wide uppercase font-semibold">
                {t('testimonials-badge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary leading-tight">
              {t('testimonials-title')}
            </h2>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('testimonials-description')}
            </p>

            {/* Statistics */}
            <div className="flex items-center justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-text-tertiary">Note Moyenne</div>
              </div>
              <div className="w-px h-8 bg-border-color"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-text-tertiary">Avis Clients</div>
              </div>
            </div>
          </div>

          {/* Main Testimonial Slider */}
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative overflow-hidden rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Progress Bar */}
              {isPlaying && (
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 z-20">
                  <div 
                    key={currentSlide}
                    className="h-full bg-primary animate-progressBar"
                  ></div>
                </div>
              )}

              {/* Slides Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                    onMouseEnter={() => setHoveredSlide(index)}
                    onMouseLeave={() => setHoveredSlide(null)}
                  >
                    <div className={`testimonial-card card shadow-theme p-10 mx-auto max-w-3xl relative ${
                      hoveredSlide === index && currentSlide === index ? 'animate-pulseGlow' : ''
                    }`}>
                      {/* Decorative Quote */}
                      <div className="absolute top-6 left-6 opacity-20">
                        <Quote className="w-16 h-16 text-primary animate-quoteBounce" />
                      </div>

                      {/* Verified Badge */}
                      {testimonial.verified && (
                        <div className="absolute top-6 right-6 flex items-center px-3 py-1 bg-success/20 text-success rounded-full text-xs font-medium">
                          <Award className="w-3 h-3 mr-1" />
                          Vérifié
                        </div>
                      )}

                      {/* Star Rating */}
                      <div className="flex justify-center mb-8 mt-4">
                        <div className="star-rating flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-6 h-6 text-yellow-400 fill-current animate-starTwinkle`}
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-text-secondary text-xl md:text-2xl mb-10 text-center italic leading-relaxed font-light relative z-10">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl font-bold mr-6 animate-cardFloat">
                            {testimonial.initials}
                          </div>
                          {/* Online indicator */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-bg-primary animate-pulse"></div>
                        </div>

                        <div className="text-left">
                          <h4 className="font-bold text-xl text-text-primary mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-text-tertiary text-sm mb-1">
                            {testimonial.position}
                          </p>
                          <div className="flex items-center text-xs text-text-tertiary">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Publié il y a {testimonial.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className={`flex justify-center items-center mt-10 space-x-6 ${
              isVisible ? 'animate-scaleIn' : 'opacity-0'
            }`} style={{ animationDelay: '600ms' }}>
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-bg-primary border border-border-color flex items-center justify-center hover:bg-bg-tertiary hover:border-primary/50 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" />
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentSlide 
                        ? 'w-8 h-3 bg-primary' 
                        : 'w-3 h-3 bg-text-tertiary hover:bg-primary/50'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  >
                    {index === currentSlide && isPlaying && (
                      <div className="absolute inset-0 bg-primary-light animate-progressBar"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-bg-primary border border-border-color flex items-center justify-center hover:bg-bg-tertiary hover:border-primary/50 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Play/Pause and Counter */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="slide-counter flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 mr-2 text-text-secondary" />
                ) : (
                  <Play className="w-4 h-4 mr-2 text-text-secondary" />
                )}
                <span className="text-text-secondary">
                  {isPlaying ? 'Pause' : 'Play'}
                </span>
              </button>

              {/* Slide Counter */}
              <div className="slide-counter px-4 py-2 rounded-full text-sm font-medium text-text-secondary">
                {currentSlide + 1} / {testimonials.length}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <p className="text-text-secondary mb-6">Rejoignez plus de 100,000 utilisateurs satisfaits</p>
            <button className="btn btn-primary px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Commencer Gratuitement
            </button>
          </div>
        </div>
      </section>
    </>
  )
}