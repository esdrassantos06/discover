/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkModeText": "#FFF",
        "darkModeStroke": "rgba(255, 255, 255, 0.5)",
        "darkModeBackground": "#000",
        "surfaceDarkMode": "rgba(255, 255, 255, 0.1)",
        "surfaceDarkModeHover": "rgba(255, 255, 255, 0.05)",

        "lightModeBackground": "#FFF",
        "lightModeText": "#000",
        "lightModeStroke": "rgba(0, 0, 0, 0.5)",
        "surfaceLightMode": "rgba(0, 0, 0, 0.1)",
        "surfaceLightModeHover": "rgba(0, 0, 0, 0.05)",
      },
      backgroundImage:{
        "hero": "url(./src/assets/background/bg-desktop.jpg)",
        "heroLight": "url(./src/assets/background/bg-desktop-light.jpg)",
      },
    },
  },
  plugins: [],
}

