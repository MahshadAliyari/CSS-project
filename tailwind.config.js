
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d66f8c",
          dark: "#b95772",
        },

        pink: {
          light: "#fff4f7",
          soft: "#f9dce6",
        },

        night: {
          bg: "#171827",
          surface: "#222438",
          elevated: "#2b2e45",
          text: "#f8eaf0",
          muted: "#c3bdcf",
          border: "#3b3d56",
        },
      },

      fontFamily: {
        vazir: ["Vazirmatn", "Arial", "sans-serif"],
      },

      borderRadius: {
        brand: "1rem",
      },

      boxShadow: {
        brand: "0 0.25rem 1rem rgba(0, 0, 0, 0.08)",
        "brand-dark": "0 0.5rem 1.5rem rgba(0, 0, 0, 0.18)",
      },
    },
  },

  plugins: [],
};

