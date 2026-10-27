
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],

  darkMode: "media",

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
      },

      fontFamily: {
        vazir: ["Vazirmatn", "Arial", "sans-serif"],
      },

      borderRadius: {
        brand: "1rem",
      },

      boxShadow: {
        brand: "0 0.25rem 1rem rgba(0, 0, 0, 0.08)",
      },
    },
  },

  plugins: [],
};

