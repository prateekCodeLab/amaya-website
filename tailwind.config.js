/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        teal: {
          50: '#E6F7F9',
          100: '#B3E8F0',
          300: '#4ECDC4',
          500: '#2AB7CA',
          600: '#1A9CB4',
          700: '#0D7A8C',
        },
        coral: {
          100: '#FFE2D9',
          300: '#FFA08A',
          500: '#FF6B6B',
          600: '#F25C54',
          700: '#D14949',
        },
        lime: {
          100: '#F0FFE6',
          300: '#C8F08F',
          500: '#A3D93B',
          600: '#8BC34A',
          700: '#689F38',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 3s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.hover-lift': {
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        },
        '.hover-lift:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};