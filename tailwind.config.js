/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./storyblok/**/*.{html,js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#4c4d4f",
          50: "#F2F3F5",
          100: "#D9DADB",
          200: "#C7C8CA", // silver sand: secondary
          300: "#b7b8b9",
          400: "#949495",
          500: "#707172",
          600: "#4c4d4f", // main Charcoal
          700: "#3d3e3f",
          800: "#2e2e2f",
          900: "#171718"
        },
        sand: {
          50: "#FFFDFA",
          100: "#FCFBF7",
          200: "#FAF7F2",
          300: "#F9F4ED", // Sand 1
          400: "#E8E1D8",
          500: "#D4CBC1",
          600: "#B8AEA2",
          700: "#8C8377", // Sand 2
          800: "#706A63",
          900: "#5C554E",
          1000: "#47423E"
        }
      },
      transitionDelay: {
        50: "50ms",
        250: "250ms",
        400: "400ms"
      }
    }
  },
  plugins: []
}
