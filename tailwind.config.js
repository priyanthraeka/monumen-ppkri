/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yatra-one": ["Yatra One", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        monumen: "url('/ppkri.jpg')",
      },
    },
  },
  plugins: [],
};
