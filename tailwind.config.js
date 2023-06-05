const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-purple": "hsl(282, 83%, 52%)",
      "secondary-purple": "hsl(230, 76%, 59%)",
      "bright-purple": "hsla(282, 90%, 66%, 1)",
      "pale-purple": "hsla(230, 100%, 91%, 1)",
      "lilac-blue": "hsla(230, 91%, 73%, 1)",
      "deep-navy": "hsl(230, 31%, 31%)",
      "mid-navy": "hsl(231, 33%, 34%)",
      "pale-navy": "hsla(231, 26%, 52%, 1)",
      "paler-navy": "hsl(224, 20%, 49%)",
      "very-pale-blue": "hsl(230, 60%, 98%)",
      "pale-blue": "hsl(231, 100%, 97%)",
      "sunset-orange": "hsl(14, 83%, 74%)",
      "danger-red": "hsla(0, 67%, 53%, 1)",
      "pale-red": "hsla(0, 69%, 72%, 1)",
      "light-blue": "hsl(204, 94%, 68%)",
      "white": "hsl(255, 100%, 100%)"
    },
    extend: {
      fontFamily: {
        'sans': ['Jost', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

