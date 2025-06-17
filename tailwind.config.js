const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6E1FF',
          200: '#C4B8FF',
          300: '#A18FFF',
          400: '#8E75FF',
          500: '#7B5CFF',
          600: '#6842FF',
          700: '#5529FF',
          800: '#4210FF',
          900: '#2F00E6',
        },
        secondary: {
          100: '#F5F5F7',
          200: '#E4E4E9',
          300: '#D3D3DB',
          400: '#A6A6B8',
          500: '#8585A0',
          600: '#636382',
          700: '#4B4B64',
          800: '#1E1E2D',
          900: '#0F0F1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'aurora': 'aurora 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(123, 92, 255, 0.15)',
        'glow-lg': '0 0 30px rgba(123, 92, 255, 0.2)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}