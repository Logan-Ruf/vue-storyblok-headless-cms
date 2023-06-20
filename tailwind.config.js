/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography")],
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
      typography: ({ theme }) => ({
        charcoal: {
          css: {
            "--tw-prose-body": theme("colors.charcoal[800]"),
            "--tw-prose-headings": theme("colors.charcoal[900]"),
            "--tw-prose-lead": theme("colors.charcoal[700]"),
            "--tw-prose-links": theme("colors.charcoal[900]"),
            "--tw-prose-bold": theme("colors.charcoal[900]"),
            "--tw-prose-counters": theme("colors.charcoal[600]"),
            "--tw-prose-bullets": theme("colors.charcoal[400]"),
            "--tw-prose-hr": theme("colors.charcoal[300]"),
            "--tw-prose-quotes": theme("colors.charcoal[900]"),
            "--tw-prose-quote-borders": theme("colors.charcoal[300]"),
            "--tw-prose-captions": theme("colors.charcoal[700]"),
            "--tw-prose-code": theme("colors.charcoal[900]"),
            "--tw-prose-pre-code": theme("colors.charcoal[100]"),
            "--tw-prose-pre-bg": theme("colors.charcoal[900]"),
            "--tw-prose-th-borders": theme("colors.charcoal[300]"),
            "--tw-prose-td-borders": theme("colors.charcoal[200]"),
            "--tw-prose-invert-body": theme("colors.charcoal[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.charcoal[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.charcoal[400]"),
            "--tw-prose-invert-bullets": theme("colors.charcoal[600]"),
            "--tw-prose-invert-hr": theme("colors.charcoal[700]"),
            "--tw-prose-invert-quotes": theme("colors.charcoal[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.charcoal[700]"),
            "--tw-prose-invert-captions": theme("colors.charcoal[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.charcoal[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.charcoal[600]"),
            "--tw-prose-invert-td-borders": theme("colors.charcoal[700]")
          }
        }
      }),
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
  }
}
