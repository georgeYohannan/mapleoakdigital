/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Style Guide – MapleOak Digital
        primary: '#295432',       // Deep Forest Green – Primary Core
        accent: '#D3A774',         // Warm Amber – Accent Action
        'rose-gold': '#CE70E8',    // Muted Rose Gold – Secondary Highlight
        'background-light': '#FBF8F3',  // Soft Cream – Base Surface
        'background-dark': '#151d1a',
        forest: {
          50: '#f0f6f1',
          100: '#dceee2',
          200: '#b9ddc5',
          300: '#8bc4a3',
          400: '#5ca67f',
          500: '#3d6b4d',
          600: '#295432',  // Deep Forest Green (Primary Core)
          700: '#22452a',
          800: '#1b3622',
          900: '#14281a',
          950: '#0a140d',
        },
        amber: {
          50: '#fdf9f4',
          100: '#faf2e8',
          200: '#f4e4cc',
          300: '#ead2a8',
          400: '#deb87d',
          500: '#D3A774',  // Warm Amber (Accent Action)
          600: '#c18e58',
          700: '#a1744a',
          800: '#835e3f',
          900: '#6b4e36',
          950: '#39281c',
        },
        cream: {
          50: '#fefdfb',
          100: '#FBF8F3',  // Soft Cream (Base Surface)
          200: '#f3f0eb',
          300: '#ebe6de',
          400: '#dfd7cc',
          500: '#cec2b1',
          600: '#b6a48e',
          700: '#9a8774',
          800: '#7e6f5f',
          900: '#675c4e',
          950: '#362f28',
        },
        rose: {
          50: '#faf5fc',
          100: '#f3e8f9',
          200: '#e9d4f4',
          300: '#dbb5ec',
          400: '#ce70e8',  // Muted Rose Gold (Secondary Highlight)
          500: '#CE70E8',
          600: '#b85dd4',
          700: '#9e4bb8',
          800: '#85439a',
          900: '#713c45',
          950: '#3e1d21',
        },
        charcoal: {
          50: '#f5f6f7',
          100: '#e5e7e9',
          200: '#ced2d5',
          300: '#abb1b6',
          400: '#818a91',
          500: '#656d75',
          600: '#565d64',
          700: '#494f54',
          800: '#3D4447',  // Oak Charcoal (Text & Link)
          900: '#383b3f',
          950: '#2D3142',
        },
        // Contact / dark design system (from design mock)
        'contact-bg': '#18221D',      // Primary dark green background
        'contact-card': '#222E2B',    // Cards, form fields
        'contact-accent': '#E9832B',  // Warm orange – CTAs, highlights
        'contact-mint': '#98B39B',    // Light green – secondary text, icons
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
