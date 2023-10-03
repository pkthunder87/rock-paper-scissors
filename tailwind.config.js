/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "radial-from": "hsl(214, 47%, 23%)",
        "radial-to": "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
