/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#202225",
        "sidebar-icon-bg": "#36393F",
        "sidebar-icon-text" : "#3BA55D",
        "sidebar-icon-bg-hover" : "#46C46E",
        "sidebar-icon-text-hover" : "#FFFFFF",
        "homepage-header": "#2D7D46",
        "discord-icon-bg": "#6370F4",
    
      },
      flex: {
        '6.5': '6.5 6.5 0%'
      },
      fontFamily: {
        'ggsans': ['ggsans', 'sans']
      }
    },
  },
  plugins: [],
}
