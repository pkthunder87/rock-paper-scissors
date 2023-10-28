/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Barlow Semi Condensed',
    },
    screens: {
      sm: '425px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'radial-from': 'hsl(214, 47%, 23%)',
        'radial-to': 'hsl(237, 49%, 15%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'rock-from': 'hsl(349, 71%, 52%)',
        'rock-to': 'hsl(349, 70%, 56%)',
        'paper-from': 'hsl(230, 89%, 62%)',
        'paper-to': 'hsl(230, 89%, 65%)',
        'scissors-from': 'hsl(39, 89%, 49%)',
        'scissors-to': 'hsl(40, 84%, 53%)',
        'lizard-from': 'hsl(261, 73%, 60%)',
        'lizard-to': 'hsl(261, 72%, 63%)',
        'spock-from': 'hsl(189, 59%, 53%)',
        'spock-to': 'hsl(189, 58%, 57%)',
      },
    },
  },
  plugins: [],
};
