/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        btn: "#927E70",
        green: "#113231",
        lightgreen: "#DEFFF2",
        lightBrown: "#F6F6F6",
        deepgreen: "#E7EDEF",
      },
      screens: {
        sm: "358px",
        xmd: "900px",
        md: "768px",
      },
      borderWidth: {
        2: "1px",
      },
    },
  },
  plugins: [],
};
