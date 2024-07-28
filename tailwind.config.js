const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'sariq': '#FD9339',
        'sariq-100': '#F26233',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        'slider-first': "url('./src/assets/images/Carusel/Rectangle 6.png')",
        'slider-second': "url('./src/assets/images/Carusel/Rectangle 226.png')",
        'slider-thrity': "url('./src/assets/images/Carusel/Rectangle 227.png')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

