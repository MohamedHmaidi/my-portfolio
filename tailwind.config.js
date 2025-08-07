/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Scan components directory (for Shadcn UI or custom components)
    './components/ui/**/*.{js,ts,jsx,tsx}', // Include Shadcn UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};