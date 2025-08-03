const { } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
        'display': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'wave-slow': 'waveAnimation 15s linear infinite',
        'wave-medium': 'waveAnimation 12s linear infinite reverse',
        'wave-fast': 'waveAnimation 10s linear infinite',
        'float': 'floating 6s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 8s ease-in-out infinite',
      },
      keyframes: {
        waveAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.05)' },
        },
      },
      opacity: {
        '15': '0.15',
      },
      colors: {
        'primary': {
          50: '#F0F9F4',
          100: '#DCF0E4',
          200: '#B6DEC7',
          300: '#8FCEAA',
          400: '#67BD8C',
          500: '#4AA06F',
          600: '#3B8058',
          700: '#2D6042',
          800: '#1E402C',
          900: '#0F2016',
        },
        'secondary': {
          50: '#F4F7FA',
          100: '#E2E8F0',
          200: '#C5D1E1',
          300: '#A0B4D0',
          400: '#7A96BD',
          500: '#5578A9',
          600: '#446087',
          700: '#334865',
          800: '#223043',
          900: '#111822',
        },
        'accent': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        'light-green': '#8FCEAA',
        'dark-green': '#3B8058',
      }
    },
  },
  variants: {
    extend: {},
  },
};