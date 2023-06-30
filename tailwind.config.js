/** @type {import('tailwindcss').Config} */
module.exports = {

  /** for toggling darkmode based on class */
  darkMode: "class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '640px',
        lg: '1200px',
        xl: '1366px',
      },
      
      extend: {
        colors: {
          primary: '#14b8a6',
          secondary:'#eceeed',
          igyellow: '#feda75',
          igorange: '#fa7e1e',
          igpink: '#d62976',
          igpurple: '#962fbf',
          igblue: '#4f5bd5',
          twitter:'#00acee',
          github: '#171515',

        },
        backgroundImage:{
          about: "url('./images/about.jpg')",
          service_img:"url('./images/developer.jpg')",
        }       
      },
      fontFamily: {
        signature: ['Great Vibes'],
      },
    },
    plugins: [],
  }
  
  