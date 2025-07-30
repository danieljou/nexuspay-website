'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useToast } from '../../context/ToastContext'

export default function Contact() {
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      showToast(t('success-message'), 'success')
      setFormData({ fullName: '', email: '', subject: '', message: '' })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast('Error sending message', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: t('phone'),
      details: ['+237 681 234 567', '+237 698 765 432']
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: t('email-contact'),
      details: ['support@nexuspay.com', 'info@nexuspay.com']
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      title: t('address'),
      details: [t('address-line1'), t('address-line2')]
    }
  ]

  const businessHours = [
    { day: t('monday-friday'), hours: '8:00 AM - 6:00 PM' },
    { day: t('saturday'), hours: '9:00 AM - 3:00 PM' },
    { day: t('sunday'), hours: t('closed') }
  ]

  return (
    <section id="contact-us" className="py-20 px-4 bg-theme-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 slide-up">
          <span className="inline-block px-6 py-3 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 transform hover:scale-105 transition-all duration-300 hover:bg-primary/30 cursor-default">
            {t('Support Center')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-primary bg-gradient-to-r from-theme-primary to-primary bg-clip-text">
            {t('Get in Touch With Our Team')}
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            {t('Have questions about our services? Need technical support? Or want to explore partnership opportunities? Our dedicated team is here to assist you every step of the way.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 group">
            <div className="card shadow-theme p-10 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
              {/* Form background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-theme-primary flex items-center">
                  <span className="w-8 h-1 bg-primary rounded-full mr-4 transform group-hover:w-12 transition-all duration-300"></span>
                  {t('send-message')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group/field">
                      <label className="form-label text-theme-primary font-medium mb-3 block transition-all duration-200" htmlFor="fullName">
                        {t('full-name')}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField('')}
                        className={`form-input relative transition-all duration-300 border-2 ${
                          focusedField === 'fullName' 
                            ? 'border-primary shadow-lg scale-[1.02] bg-primary/5' 
                            : 'border-transparent hover:border-primary/30'
                        }`}
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        focusedField === 'fullName' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                    
                    <div className="relative group/field">
                      <label className="form-label text-theme-primary font-medium mb-3 block transition-all duration-200" htmlFor="email">
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className={`form-input relative transition-all duration-300 border-2 ${
                          focusedField === 'email' 
                            ? 'border-primary shadow-lg scale-[1.02] bg-primary/5' 
                            : 'border-transparent hover:border-primary/30'
                        }`}
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        focusedField === 'email' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                  </div>
                  
                  <div className="relative group/field">
                    <label className="form-label text-theme-primary font-medium mb-3 block transition-all duration-200" htmlFor="subject">
                      {t('subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      className={`form-input relative transition-all duration-300 border-2 ${
                        focusedField === 'subject' 
                          ? 'border-primary shadow-lg scale-[1.02] bg-primary/5' 
                          : 'border-transparent hover:border-primary/30'
                      }`}
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === 'subject' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  
                  <div className="relative group/field">
                    <label className="form-label text-theme-primary font-medium mb-3 block transition-all duration-200" htmlFor="message">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      className={`form-input relative transition-all duration-300 border-2 resize-none ${
                        focusedField === 'message' 
                          ? 'border-primary shadow-lg scale-[1.02] bg-primary/5' 
                          : 'border-transparent hover:border-primary/30'
                      }`}
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === 'message' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary px-10 py-4 relative overflow-hidden group/btn transform hover:scale-105 transition-all duration-300 hover:shadow-xl disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          {t('send-message-btn')}
                          <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Info Card */}
            <div className="card shadow-theme p-10 group transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-theme-primary flex items-center">
                  <span className="w-8 h-1 bg-primary rounded-full mr-4 transform group-hover:w-12 transition-all duration-300"></span>
                  {t('contact-info')}
                </h3>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-start group/item p-4 rounded-2xl hover:bg-primary/10 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={info.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-theme-primary text-lg group-hover/item:text-primary transition-colors duration-200">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-theme-secondary hover:text-primary transition-colors duration-200 cursor-pointer">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Business Hours Card */}
            <div className="card shadow-theme p-10 group transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-theme-primary flex items-center">
                  <span className="w-8 h-1 bg-primary rounded-full mr-4 transform group-hover:w-12 transition-all duration-300"></span>
                  {t('business-hours')}
                </h3>
                
                <div className="space-y-6">
                  {businessHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group/schedule"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-theme-secondary group-hover/schedule:text-primary transition-colors duration-200 font-medium">
                        {schedule.day}
                      </span>
                      <span className="font-semibold text-theme-primary group-hover/schedule:text-primary transition-colors duration-200">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-theme mt-6 transform hover:translate-y-1 transition-transform duration-300">
                    <div className="p-4 bg-primary/10 rounded-xl border-l-4 border-primary">
                      <p className="text-theme-secondary italic">
                        {t('support-note')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-up {
          animation: slideInUp 0.8s ease-out;
        }

        .group/item:nth-child(1) { animation-delay: 0ms; }
        .group/item:nth-child(2) { animation-delay: 100ms; }
        .group/item:nth-child(3) { animation-delay: 200ms; }

        .group/schedule:nth-child(1) { animation-delay: 0ms; }
        .group/schedule:nth-child(2) { animation-delay: 100ms; }
        .group/schedule:nth-child(3) { animation-delay: 200ms; }
      `}</style>
    </section>
  )
}