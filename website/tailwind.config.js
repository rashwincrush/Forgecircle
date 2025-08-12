/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Premium color system
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#ff6b6b',
        'accent-2': '#4ecdc4',
        dark: '#0f172a',
        darker: '#0a0f1c',
        light: '#f8fafc',
        gray: '#64748b',
        brand: {
          DEFAULT: '#667eea',  // Updated to match the premium palette
          secondary: '#764ba2',
          accent: '#ff6b6b',
          foreground: '#ffffff',
          dark: '#5a72d4',
          light: '#eef2ff',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)',
        'card-hover': '0 25px 50px rgba(102, 126, 234, 0.2)',
        premium: '0 20px 40px rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(circle at 25% 25%, var(--tw-gradient-from) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--tw-gradient-to) 0%, transparent 50%)',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        meshShift: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.1) rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(5deg)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(255, 255, 255, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(255, 255, 255, 0.4)' },
        },
      },
      animation: {
        meshShift: 'meshShift 20s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        shimmer: 'shimmer 2.5s infinite',
        glow: 'glow 2s infinite alternate',
      },
      backdropBlur: {
        xs: '2px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
