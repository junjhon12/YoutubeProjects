/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        blue200: 'hsl(193, 38%, 86%)',
        green300: 'hsl(150, 100%, 66%)',
      },
      neutral: {
        blue600: 'hsl(217, 19%, 38%)',
        blue900: 'hsl(217, 19%, 24%)',
        blue950: 'hsl(218, 23%, 16%)',
      }, 
    },
    extend: {},
  },
  plugins: [],
}

