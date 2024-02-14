/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portbackground: "#dbe8f7",
        portfooter: "#5551d7",
        portblue: "#1ec4f8",
        porttext: "#0a1e50",
        portdarkpurple: "#4530b3",
        portlight: "#f9fafe",
      },
      fontFamily: {
        body: ["Roboto"],
        heading: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
