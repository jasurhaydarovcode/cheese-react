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
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

