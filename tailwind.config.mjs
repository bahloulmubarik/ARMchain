/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          from: '#8129FF',
          to: '#A25CFE',
        },
        dark: {
          navy: '#1a1a2e',
          section: '#1c1f2e',
          card: '#1a1a1a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 800ms ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'slide-left': 'slideLeft 20s linear infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-center': 'slideInCenter 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'pop-in-left': 'popInLeft 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pop-in-center': 'popInCenter 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pop-in-right': 'popInRight 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100%) translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        slideInCenter: {
          '0%': { transform: 'translateX(50%) translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100%) translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        popInLeft: {
          '0%': { transform: 'scale(0) translateX(-100px) translateY(-100px)', opacity: '0' },
          '50%': { transform: 'scale(0.8) translateX(-20px) translateY(-20px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateX(0) translateY(0)', opacity: '1' },
        },
        popInCenter: {
          '0%': { transform: 'scale(0) translateY(-100px)', opacity: '0' },
          '50%': { transform: 'scale(0.8) translateY(-20px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        popInRight: {
          '0%': { transform: 'scale(0) translateX(100px) translateY(-100px)', opacity: '0' },
          '50%': { transform: 'scale(0.8) translateX(20px) translateY(-20px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateX(0) translateY(0)', opacity: '1' },
        },
      },
      letterSpacing: {
        'tight': '-0.06em',
      }
    },
  },
  plugins: [],
};
