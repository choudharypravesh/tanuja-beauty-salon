import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff7f8',
          100: '#ffeaef',
          200: '#ffd3dd',
          300: '#ffabbc',
          400: '#ff7a95',
          500: '#f94d73',
          600: '#e22a5a',
          700: '#bf1c4b',
          800: '#991a41',
          900: '#7a1839',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          900: '#881337',
          950: '#4c0519',
        },
        plum: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        gold: {
          50: '#fdfaf0',
          100: '#faf1d4',
          200: '#f4e0a0',
          300: '#ecc86a',
          400: '#e2ae3f',
          500: '#c98e28',
          600: '#a9701e',
          700: '#85551a',
          800: '#6a431a',
          900: '#58381a',
        },
        cream: {
          50: '#fffaf5',
          100: '#fff3ea',
          200: '#ffe5d1',
          300: '#ffd1ad',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Poppins', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
        display: ['var(--font-cinzel)', 'Cinzel', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        glow: '0 10px 40px -10px rgba(244, 63, 94, 0.35)',
        'glow-plum': '0 10px 40px -10px rgba(168, 85, 247, 0.35)',
        'glow-gold': '0 10px 40px -10px rgba(234, 179, 8, 0.35)',
        card: '0 20px 50px -20px rgba(159, 18, 57, 0.25)',
        glass: '0 8px 32px rgba(31, 38, 135, 0.12)',
      },
      backgroundImage: {
        'gradient-blush': 'linear-gradient(135deg, #fff1f2 0%, #fce7f3 50%, #f3e8ff 100%)',
        'gradient-radiant': 'linear-gradient(135deg, #f43f5e 0%, #e879f9 50%, #a855f7 100%)',
        'gradient-rose-gold': 'linear-gradient(135deg, #fda4af 0%, #fb7185 35%, #ecc86a 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ffd3dd 0%, #f4e0a0 50%, #e9d5ff 100%)',
        'shine': 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
