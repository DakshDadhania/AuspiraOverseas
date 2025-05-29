/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1e40af',
        'primary-blue-dark': '#1e3a8a',
        'secondary-green': '#059669',
        'accent-orange': '#ea580c',
        'neutral-gray': '#6b7280',
        'light-gray': '#f8fafc',
      },
    },
  },
  plugins: [],
} 