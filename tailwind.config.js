/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 0.5s ease-in-out',
        'button-hover': 'buttonHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        buttonHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      colors: {
        primary: {
          light: '#3a86ff',
          DEFAULT: '#0055ff',
          dark: '#0033aa',
        },
        secondary: '#ff006e',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

}
