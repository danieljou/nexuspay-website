'use client'

import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'
import { useToast } from '../../context/ToastContext'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignup: () => void
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
  const { login } = useAuth()
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = t('error-email')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('error-email')
    }

    if (!formData.password) {
      newErrors.password = t('error-password-required')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await login(formData.email, formData.password)
      showToast('Welcome back!', 'success')
      onClose()
      setFormData({ email: '', password: '', rememberMe: false })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast('Login failed. Please check your credentials.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-bg-primary rounded-2xl shadow-2xl border border-border-color max-w-md w-full overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border-color bg-gradient-to-r from-primary/5 to-primary-light/5">
          <h3 className="text-xl font-bold text-text-primary tracking-tight">
            {t('login-title')}
          </h3>
          <button 
            onClick={onClose} 
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200 p-1 hover:bg-bg-tertiary rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-medium text-text-secondary" 
                htmlFor="loginEmail"
              >
                {t('email')}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-xl border transition-all duration-200
                    bg-bg-secondary text-text-primary placeholder-text-tertiary
                    focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                    ${errors.email 
                      ? 'border-danger focus:border-danger focus:ring-danger/20' 
                      : 'border-border-color hover:border-primary/40'
                    }
                  `}
                  placeholder="Enter your email"
                  required
                />
                {/* Email icon */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              {errors.email && (
                <div className="flex items-center space-x-1 text-danger text-sm animate-slideUp">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label 
                className="block text-sm font-medium text-text-secondary" 
                htmlFor="loginPassword"
              >
                {t('password')}
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-xl border transition-all duration-200
                    bg-bg-secondary text-text-primary placeholder-text-tertiary
                    focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                    ${errors.password 
                      ? 'border-danger focus:border-danger focus:ring-danger/20' 
                      : 'border-border-color hover:border-primary/40'
                    }
                  `}
                  placeholder="Enter your password"
                  required
                />
                {/* Lock icon */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              {errors.password && (
                <div className="flex items-center space-x-1 text-danger text-sm animate-slideUp">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center pt-2">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`
                  w-4 h-4 border-2 rounded transition-all duration-200 mr-2
                  ${formData.rememberMe 
                    ? 'bg-primary border-primary' 
                    : 'border-border-color group-hover:border-primary/60'
                  }
                `}>
                  {formData.rememberMe && (
                    <svg className="w-3 h-3 text-white m-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {t('remember-me')}
                </span>
              </label>
              <button 
                type="button"
                className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
              >
                {t('forgot-password')}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200
                bg-gradient-to-r from-primary to-primary-dark
                hover:from-primary-dark hover:to-primary 
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-primary disabled:hover:to-primary-dark
                transform hover:scale-[1.02] active:scale-[0.98]
                shadow-lg hover:shadow-xl
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                t('sign-in-btn')
              )}
            </button>
          </form>

          {/* Sign Up Link */}
            <div className="text-center pt-6 border-t border-border-color relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-bg-primary border border-border-color rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-sparkle"></div>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                <span>{t('no-account')}</span>{' '}
                <button 
                  onClick={onSwitchToSignup} 
                  className="text-primary hover:text-primary-dark font-bold transition-all duration-300 hover:underline relative group inline-flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t('sign-up')}</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}