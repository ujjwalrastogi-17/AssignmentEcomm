/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans'], // 'sans' is optional and specifies a fallback font
      },
    },
  },
  plugins: [],
}

