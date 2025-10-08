import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#c8a2c8',
        'brand-blue': {
          DEFAULT: '#1e3a8a',
          dark: '#312e81',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        shine: {
          '100%': { left: '125%' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        pulse: 'pulse 2s infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 0.5s',
      },
      boxShadow: {
        'form': '0 25px 50px rgba(30, 58, 138, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3)',
        'button-glow': '0 10px 30px rgba(30, 58, 138, 0.3)',
        'button-glow-hover': '0 15px 40px rgba(30, 58, 138, 0.4)',
      },
    },
  },
  plugins: [],
};