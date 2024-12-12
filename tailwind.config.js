import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f8f5f2',
        'primary-dark': 'rgb(88,68,70)',
        'accent': 'rgb(88,68,70)',
        'neutral': '#f8f5f2',
        'image-border': '#e5bdad',
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(88,68,70)", // Ostale boje (ako treba)
          secondary: "#f8f5f2",
          accent: "rgb(88,68,70)",
          neutral: "#f8f5f2", // Postavljamo braon za neutral
          "base-100": "#f8f5f2",
          // "base-200": "#F5F5F5",
          // "base-300": "#E0E0E0",
          "base-content": "rgb(88,68,70)",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#FBBF24",
          error: "#EF4444",
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

