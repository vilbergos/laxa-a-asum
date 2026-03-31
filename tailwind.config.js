/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stone-deep': '#1A1917',
        'stone-warm': '#2C2A26',
        parchment: '#F0EBE1',
        'parchment-light': '#F7F4EE',
        taupe: '#8C867E',
        river: '#3D6B6B',
        ember: '#B85C38',
        bone: '#D9D3C7',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
