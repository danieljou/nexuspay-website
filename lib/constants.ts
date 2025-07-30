export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  TRANSACTIONS: '/transactions',
  SETTINGS: '/settings',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'nexuspay-token',
  REFRESH_TOKEN: 'nexuspay-refresh',
  THEME: 'nexuspay-theme',
  LANGUAGE: 'nexuspay-language',
  USER_PREFERENCES: 'nexuspay-preferences',
} as const;

export const TRANSACTION_TYPES = {
  SEND: 'send',
  RECEIVE: 'receive',
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  BILL_PAYMENT: 'bill_payment',
} as const;

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
} as const;

export const PAYMENT_METHODS = {
  NEXUSPAY: 'nexuspay',
  ORANGE_MONEY: 'orange_money',
  MTN_MONEY: 'mtn_money',
  BANK_TRANSFER: 'bank_transfer',
  CARD: 'card',
} as const;

export const CURRENCIES = {
  XAF: 'XAF',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export const LANGUAGES = {
  EN: 'en',
  FR: 'fr',
} as const;

export const CONTACT_INFO = {
  EMAIL: 'support@nexuspay.com',
  PHONE: '+237 681 234 567',
  ADDRESS: '123 Financial District, Yaoundé, Cameroon',
} as const;

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/nexuspay',
  TWITTER: 'https://twitter.com/nexuspay',
  INSTAGRAM: 'https://instagram.com/nexuspay',
  LINKEDIN: 'https://linkedin.com/company/nexuspay',
} as const;

export const APP_DOWNLOAD_LINKS = {
  APP_STORE: 'https://apps.apple.com/app/nexuspay',
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.nexuspay.app',
} as const;

export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  TRANSACTION_MIN_AMOUNT: 100,
  TRANSACTION_MAX_AMOUNT: 1000000,
} as const;
