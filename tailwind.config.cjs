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
        "left-bottom-bottom-number": "#B4AFAB",
        "text-hover": "#F2FFFF",
        "add-friend-text": "#41C26E",
        "normal-text": "#ACB9B6",
        "body-center-text": "#929599",
        "shady-white": "#D0D1D3",
        "button-bg": "#3C438B",
        "button-text-bg": "#7E8090",
        "division": "#4F545C99",
      },
      flex: {
        '6.5': '6.5 6.5 0%',
        '2.8': '2.85 2.85 0%',
      },
      fontFamily: {
        'ggsans': ['ggsans', 'sans'],
        'ggsans-light': ['ggsans-light', 'sans']
      }
    },
  },
  plugins: [],
}
