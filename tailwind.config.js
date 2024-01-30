/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portblue: "#3399CC",
        portbrown: "#330000",
        portwood: "#CDB99C",
      },
      fontFamily: {
        body: ["Roboto"],
        heading: ["Montserrat"],
      },
    },
  },
  plugins: [],
};

