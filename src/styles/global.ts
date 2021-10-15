import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Bungee';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/bungee-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-regular.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

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
