'use client'

import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'
import { useToast } from '../../context/ToastContext'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const { register } = useAuth()
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('error-name')
    }

    if (!formData.email) {
      newErrors.email = t('error-email')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('error-email')
    }

    if (!formData.password) {
      newErrors.password = t('error-password')
    } else if (formData.password.length < 8) {
      newErrors.password = t('error-password')
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('error-password-match')
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const [firstName, ...lastNameParts] = formData.fullName.trim().split(' ')
      const lastName = lastNameParts.join(' ')

      await register({
        first_name: firstName,
        last_name: lastName || firstName,
        email: formData.email,
        password: formData.password
      })

      showToast('Account created successfully! Please check your email for verification.', 'success')
      onClose()
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      })
    } catch (error: any) {
      showToast(error.message || 'Registration failed', 'error')
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
          <h3 className="text-lg font-bold text-theme-primary">
            {t('create-account-title')}
          </h3>
          <button onClick={onClose} className="text-theme-tertiary hover:text-theme-secondary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="fullName">
                {t('full-name')}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                required
              />
              {errors.fullName && (
                <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>
              )}
            </div>
            
            <div>
              <label className="form-label" htmlFor="signupEmail">
                {t('email')}
              </label>
              <input
                type="email"
                id="signupEmail"
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
              <label className="form-label" htmlFor="signupPassword">
                {t('password')}
              </label>
              <input
                type="password"
                id="signupPassword"
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
            
            <div>
              <label className="form-label" htmlFor="confirmPassword">
                {t('confirm-password')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                required
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
              )}
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2 mt-1"
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-theme-secondary">
                {t('agree-terms')}
              </label>
            </div>
            {errors.agreeTerms && (
              <div className="text-red-500 text-sm">{errors.agreeTerms}</div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full py-3 rounded-lg"
            >
              {isSubmitting ? 'Creating Account...' : t('create-account-btn')}
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-theme-secondary">
            <span>{t('already-account')}</span>{' '}
            <button onClick={onSwitchToLogin} className="text-primary">
              {t('sign-in')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}