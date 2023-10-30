/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeVietNamPro: ['Be Vietnam Pro'],
        Purple: ['Purple Purse'],
      },
      colors: {
        neutralBlack: '#222222',
        redNavBar:'#C92127',
        blackImg:'#000000E5',
        h1Gray:'#374151',
        pGray:'#4B5563',
        content1:'#0000001A',
      },
      screens: {
        navBar2XL:'1554px',
        navBarXl:'1370px',
        navBarLg:'1150px',
        navBarTablet:'1105px',
        introductXl:'1115px',
        headerPhone:'515px',
        headerPhone1:'375px',
        menuPhone:'650px',
        linePhone:'600px',
        content2Xl:'1742px',
        contentXl:'1502px',
        contentLg2:'1344px',
        contentLg:'1224px',
        contentCotton:'1198px',
        contentTablet:'1185px',
        
      },
      backgroundImage: {
        'header-image':"url('/public/images/imageHeader.png')",
        'navBar-image' :"url('/public/images/backgroundNavBar.png')",
      },
    },
  },
  plugins: [],
}


