/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfPro: 'SF Pro Display'
      },
      backgroundImage: {
        mottoBgImg: "url('../assets/images/Rectangle.png')",
        heroPattern: "url('../assets/images/Mask.png')",
      },
      backgroundColor: {
        buttonColor: 'rgb(24, 173, 242)',
        departmentBg: 'rgb(248, 248, 250)',
      },
      colors: {
        opac80: 'rgb(108, 108, 108)'
      }
    },
  },
  plugins: [],
}