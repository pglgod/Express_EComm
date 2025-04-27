/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "var(--secondary)",
      },
      fontFamily: {
        poppins: "var(--poppins)",
      },
      fontSize: {
        xsm: "var(--xsm)",
        md: "var(--md)"
      },
      aspectRatio: {
        "18/7": "18 / 7"
      }

    },
  },
  plugins: [],
}

