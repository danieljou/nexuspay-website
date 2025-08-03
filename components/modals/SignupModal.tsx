import { CheckCircle, Clock, Eye, EyeOff, Loader2, Mail, Shield, Sparkles, User, X } from 'lucide-react';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

// Mock translation function
const t = (key: string) => {
  const translations: Record<string, string> = {
    'Sign Up': 'Sign Up',
    'Name': 'Full Name',
    'Email': 'Email Address',
    'Password': 'Password',
    'Name is required': 'Name is required',
    'Valid email is required': 'Valid email is required',
    'Password must be at least 6 characters': 'Password must be at least 6 characters',
    'Signed up successfully': 'Account created successfully!',
    'Signup failed': 'Registration failed. Please try again.',
    'Strength': 'Password Strength',
    'Too_weak': 'Too Weak',
    'Weak': 'Weak',
    'Medium': 'Medium',
    'Strong': 'Strong',
    'Already have an account?': 'Already have an account?',
    'Login': 'Sign In',
    'Welcome to NexusPay!': 'Welcome to NexusPay!',
    'By signing up, you agree to our': 'By signing up, you agree to our',
    'Terms of Service': 'Terms of Service',
    'and': 'and',
    'Privacy Policy': 'Privacy Policy',
    'Secure & encrypted': 'Bank-level security',
    'It only takes a minute!': 'Quick & easy setup',
    'Join thousands of users': 'Join 50,000+ happy users',
    'No hidden fees': 'Transparent pricing',
    'Lightning fast': 'Lightning fast transfers',
    'Available worldwide': '190+ countries supported'
  };
  return translations[key] || key;
};

// Mock password strength function
const passwordStrength = (password: string) => {
  if (password.length === 0) return { id: 0, value: 'Too_weak' };
  if (password.length < 6) return { id: 0, value: 'Too_weak' };
  if (password.length < 8) return { id: 1, value: 'Weak' };
  if (password.length < 12) return { id: 2, value: 'Medium' };
  return { id: 3, value: 'Strong' };
};

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});
    setShowPassword(false);
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = t('Name is required');
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = t('Valid email is required');
    if (password.length < 6) newErrors.password = t('Password must be at least 6 characters');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(t('Signed up successfully'));
      onClose();
      resetForm();
    } catch {
      alert(t('Signup failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const passwordStrengthResult = passwordStrength(password);
  const strengthColors: Record<string, string> = {
    Too_weak: 'bg-red-500',
    Weak: 'bg-orange-500',
    Medium: 'bg-yellow-500',
    Strong: 'bg-green-500',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Modal Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Signup Modal - Centered and Stable */}
        <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100 hover:scale-[1.02]">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{t('Sign Up')}</h2>
                <p className="text-sm text-gray-600">Create your account in seconds</p>
              </div>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('Name')}
                    className={`w-full px-4 pr-12 py-3 rounded-xl bg-gray-50 text-gray-900 border-2 transition-all duration-200 ${
                      errors.name 
                        ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white'
                    } outline-none`}
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                    <X className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('Email')}
                    className={`w-full px-4 pr-12 py-3 rounded-xl bg-gray-50 text-gray-900 border-2 transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white'
                    } outline-none`}
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                    <X className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('Password')}
                    className={`w-full px-4 pr-12 py-3 rounded-xl bg-gray-50 text-gray-900 border-2 transition-all duration-200 ${
                      errors.password 
                        ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white'
                    } outline-none`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                    <X className="w-4 h-4" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Password Strength */}
              {password && (
                <div className="animate-in slide-in-from-top duration-300">
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>{t('Strength')}:</span>
                    <span className="font-medium">{t(passwordStrengthResult.value)}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${strengthColors[passwordStrengthResult.value]}`}
                      style={{ width: `${Math.min((passwordStrengthResult.id + 1) * 25, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                {t('Sign Up')}
              </button>
            </div>

            {/* Switch to Login */}
            <p className="text-sm text-gray-600 mt-6 text-center">
              {t('Already have an account?')}{' '}
              <button
                onClick={() => {
                  onClose();
                  onSwitchToLogin();
                }}
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
              >
                {t('Login')}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Animated Info Boxes - Moving Elements */}
      
      {/* Top Floating Message */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 animate-in slide-in-from-top duration-700">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-pulse">
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">{t('Welcome to NexusPay!')}</span>
        </div>
      </div>

      {/* Bottom Legal Notice */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-in slide-in-from-bottom duration-700 delay-200">
        <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-xl shadow-lg text-sm max-w-sm text-center border border-gray-200">
          {t('By signing up, you agree to our')}{' '}
          <a href="/terms" className="text-blue-600 underline hover:text-blue-700">{t('Terms of Service')}</a>{' '}
          {t('and')}{' '}
          <a href="/privacy" className="text-blue-600 underline hover:text-blue-700">{t('Privacy Policy')}</a>
        </div>
      </div>

      {/* Left Side Features */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        <div className="animate-in slide-in-from-left duration-700 delay-300">
          <div className="bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <Shield className="w-5 h-5" />
            <span className="font-medium">{t('Secure & encrypted')}</span>
          </div>
        </div>
        <div className="animate-in slide-in-from-left duration-700 delay-500">
          <div className="bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{t('Join thousands of users')}</span>
          </div>
        </div>
        <div className="animate-in slide-in-from-left duration-700 delay-700">
          <div className="bg-purple-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">{t('No hidden fees')}</span>
          </div>
        </div>
      </div>

      {/* Right Side Features */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        <div className="animate-in slide-in-from-right duration-700 delay-400">
          <div className="bg-orange-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{t('It only takes a minute!')}</span>
          </div>
        </div>
        <div className="animate-in slide-in-from-right duration-700 delay-600">
          <div className="bg-yellow-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">{t('Lightning fast')}</span>
          </div>
        </div>
        <div className="animate-in slide-in-from-right duration-700 delay-800">
          <div className="bg-indigo-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-max transform hover:scale-105 transition-transform">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{t('Available worldwide')}</span>
          </div>
        </div>
      </div>

      {/* Floating Corner Elements */}
      <div className="absolute top-20 right-20 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse" />
      </div>
      <div className="absolute top-1/3 left-10 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse" />
      </div>
    </div>
  );
}
