import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @keyframes scale{
      0% {
        transform: translateX(-100vw)
      }
      100% {
        transform: translateX(0);
      }
    }
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
  p {
    margin-bottom: 1rem;
  }
  a {
    cursor: pointer;
  }
`
export default GlobalStyles
