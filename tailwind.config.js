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
        // Make this
        'full-100': '#FFFBED',
        'sariq': '#FD9339',
        'sariq-100': '#F26233',
        'primBlack': '#292929',
        'arrow-100': '#808080',
        'sidebar-100': '#FBE8BB',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        // Slider background images
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

