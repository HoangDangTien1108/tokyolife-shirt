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
        navBarMenu:'#FFFFFF66',
        neutralBlack: '#222222',
        redNavBar:'#C92127',
        blackImg:'#000000E5',
        h1Gray:'#374151',
        pGray:'#4B5563',
        content1:'#0000001A',
        backgroundCustomer:'#F9F8FC',
        customerText:'#333333',
        paramentbg:'#00000033',
      },
      screens: {
        navBar2XL:'1554px',
        navBarXl:'1370px',
        navBarLg:'1150px',
        navBarTablet:'1105px',
        navBarTablet2:'1106px',
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
        customer2XL:'1217px',
        customerTablet:'768px',
        customerPhone:'430px',
        Outstand2Xl:'1489px',
        Whybuy3Xl:'1673px',
        Whybuy2Xl:'1564px',
        WhybuyXl:'1491px',
        OutstandXl:'1200px',
        parameterXl:'1210px',
        parametermobile:'780px',
        parameterphone:'440px',
      },
      backgroundImage: {
        'header-image':"url('/public/images/imageHeader.png')",
        'navBar-image' :"url('/public/images/backgroundNavBar.png')",
        'customer-image':"url('/public/images/backgroundNumber.png')",
      },
    },
  },
  plugins: [],
}


