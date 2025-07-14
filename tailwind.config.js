/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F5ECD7",
        arcadeYellow: "#FCE762",
        vintageRed: "#E24E42",
        inkBlack: "#3B3A30",
        fadedTan: "#D4C4A8",
        softGreen: "#7FC6A4",
        warmYellow: "#FFD966",
        vintageSky: "#B0E6FF",
        arcadeGreen: "#7ED957",
      },
      boxShadow: {
        toon: "4px 4px 0 #3B3A30",
      },
      fontFamily: {
        heading: ['"Luckiest Guy"', "cursive"],
        body: ['"Comic Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
