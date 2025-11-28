import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
        sports: ["Bebas Neue", "Impact", "sans-serif"],
      },
    },
  },
  
  daisyui: {
    themes: ["sportshub", "sportshub-dark"],
  },
};