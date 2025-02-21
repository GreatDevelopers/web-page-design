/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",
        secondary: "#33ff57",
        danger:"#c90606",
        dark: "#1e293b",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's default reset styles
  },
  plugins: [],
};
