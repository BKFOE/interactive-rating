/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        orange: "#FB7413"
      },
      neutral: {
        lightGrey: "#959EAC",
        darkBlue: "#252D37",
        veryDarkBlue: "#121417"
      }
    },
    fontFamily: {
      bodyCopy:
      "Overpass, sans-serif"
    },
    screens: {
      'xxs': '375px'
    },
    width: {
      'circle': '42px'
    },
    height: {
      'circle': '42px'
    }
    }},
  plugins: [],
  safelist: [
    'bg-neutral-lightGrey/10',
    'text-primary-orange/50',
    'text-white/40',
    'text-neutral-darkBlue',
    'text-white/50',
    'bg-primary-orange',
    'text-neutral-veryDarkBlue/90',
    'bg-neutral-veryDarkBlue',
  ]
}

