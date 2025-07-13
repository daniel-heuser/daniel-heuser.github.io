module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        background: "#181A20",
        accent: "#00FFC2",
        accent2: "#1E90FF",
        text: "#F3F4F6"
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
};
