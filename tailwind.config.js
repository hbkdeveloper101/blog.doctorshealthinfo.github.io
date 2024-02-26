/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "theme-primary" : "#274375",
          "light-green" : "#90EE90",
          "highlight": "#457FE6",
          "light-blue": "#3560AB",
          "footer-color":"#3560AB",
        }
      },
    },
    plugins: [],
  }