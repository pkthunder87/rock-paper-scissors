/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Barlow Semi Condensed',
    },
    extend: {
      colors: {
        'radial-from': 'hsl(214, 47%, 23%)',
        'radial-to': 'hsl(237, 49%, 15%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'dark-text': 'hsl(229, 25%, 31%)',
      },
    },
  },
  plugins: [],
};
