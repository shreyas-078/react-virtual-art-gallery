/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond", "sans-serif"'],
      },
      keyframes: {
        "move-x": {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [],
};
