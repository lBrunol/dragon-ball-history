import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bungee', cursive;
  }
  :root{
    --accent-color: #F2C864;
    --text-color: #000;
    --highlight-color: #FF8D00;
    --menu-text-color: #FFF;
  }

  html {
    font-size: 16px;
  }
  body {
    font-family: 'Bungee', 'Arial';
  }

`
export default GlobalStyles
