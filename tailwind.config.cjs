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
        "body-left-bg": "#2F3136",
        "body-center-bg": "#36393F",
        "body-left-header-button-text": "#8AA2A1",
        "body-text": "#8E9297",
        "body-left-div-bg": "#42464D",
        "snow-bg": "#5865F2",
        "gradient-start": "#8547C3",
        "gradient-end": "#9C5882",
        "plus-icon-bg" : "#B9BBBE",
        "skeleton-circle": "#36393F",
        "left-bottom-bg": "#292B2F",
        

    
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
