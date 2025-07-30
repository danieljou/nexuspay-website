import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',

        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        success: 'var(--success)',
        info: 'var(--info)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',

        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',

        'border-color': 'var(--border-color)',
      },
      boxShadow: {
        custom: '0 4px 12px var(--shadow-color)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
        slideUp: 'slideUp 0.8s ease-in-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // ➕ Délais d'animation (comme `animation-delay-100`)
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
