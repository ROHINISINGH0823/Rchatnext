/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#C4E7E1',
        softPink: '#FADADD',
        userBubble: '#A0D9CC',
        textMain: '#1C2B2D',
        textSecondary: '#3C4C4E',
        tealBtn: '#80C9BB',
      },
    },
  },
  plugins: [],
}
