import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  body {
    background-color: ${({ theme }) => theme.background};
  }

`;
