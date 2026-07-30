/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0B0B',
          800: '#0F0F0F',
          700: '#141414',
          600: '#1A1A1A',
          500: '#222222',
          400: '#2C2C2C',
          300: '#3A3A3A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8962E',
          soft: '#C9A961',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'wide-lg': '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(16px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
