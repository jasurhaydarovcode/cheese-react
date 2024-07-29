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
        'full-100': '#FFFBED',
        'sariq': '#FD9339',
        'sariq-100': '#F26233',
        'sariq-200': '#FBE8BB',
        'primBlack': '#292929',
        'arrow-100': '#808080',
        'sidebar-100': '#FBE8BB',
        'blown': '#4E2D2D',
        'blown-900': '#292929',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        // Slider bg images
        'slider-first': "url('./src/assets/images/Carusel/Rectangle 6.png')",
        'slider-second': "url('./src/assets/images/Carusel/Rectangle 226.png')",
        'slider-thrity': "url('./src/assets/images/Carusel/Rectangle 227.png')",

        // Advantages BG
        'advantages': "url('./src/assets/images/avzalliklar/Mask Group.png')",

        // Choose section background's
        'choose-bg-100': "url('./src/assets/images/choose/bg.png')",
        'choose-bg-200': "url('./src/assets/images/choose/bg (1).png')",
        'choose-bg-200': "url('./src/assets/images/choose/bg.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

