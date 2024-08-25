/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        input: `#F5F4F6`,
      },
      colors: {
        input: `#7C7C8D`,
      },
    },
  },
  plugins: [],
};
