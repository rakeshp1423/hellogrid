/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(270deg, #6366f1, #ec4899, #facc15)',
        'mesh-gradient': 'radial-gradient(at 20% 30%, #6366f1 0px, transparent 50%), radial-gradient(at 80% 70%, #ec4899 0px, transparent 50%), radial-gradient(at 50% 100%, #14b8a6 0px, transparent 50%)',
      },
      animation: {
        'gradient-move': 'gradientMove 6s ease infinite',
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
        'fadeIn': 'fadeIn 1.2s ease-out forwards',
        'mesh-gradient': 'mesh 2s ease-in-out infinite',
        'gradient-move': 'gradientMove 6s ease-in-out infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        mesh: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
