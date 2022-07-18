import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  
  html {
    height: 100%;
  }
  
  body {
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`