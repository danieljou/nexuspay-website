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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-theme-primary rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-theme">
          <h3 className="text-lg font-bold text-theme-primary">{t('login-title')}</h3>
          <button onClick={onClose} className="text-theme-tertiary hover:text-theme-secondary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="loginEmail">
                {t('email')}
              </label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div>
              <label className="form-label" htmlFor="loginPassword">
                {t('password')}
              </label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                required
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-sm text-theme-secondary">
                  {t('remember-me')}
                </label>
              </div>
              <a href="#" className="text-sm text-primary">
                {t('forgot-password')}
              </a>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full py-3 rounded-lg"
            >
              {isSubmitting ? 'Signing In...' : t('sign-in-btn')}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-theme-secondary">
            <span>{t('no-account')}</span>{' '}
            <button onClick={onSwitchToSignup} className="text-primary">
              {t('sign-up')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}