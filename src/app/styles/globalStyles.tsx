"use client";

import reset from "./reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary}
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.neutral__600};
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: black;
  }

 
   h1{
    font-size: 96px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media (min-width: 1320px){
      font-size: 200px;
      margin: 0;
    }
  }

  h2{
    font-size: 32px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media screen (min-width: 920px){
      font-size: 42px;
    }
  }

  h3{
    font-size: 24px;
    font-weight: 900;
    line-height: 80%;
    letter-spacing: 0;

    @media screen (min-width: 920px){
      font-size: 32px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.neutral__600};

    @media screen (min-width: 920px){
      font-size: 18px;
    }

    &.all-caps{
      letter-spacing: 24;
    }

    &.small{
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;

      @media screen (min-width: 920px){
        font-size: 14px;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500; 
  }

  section{
    padding: 60px 0;

    @media (min-width: 920px){
      padding: 120px 0;
    }
  }

  .uppercase{
    text-transform: uppercase;
  }

  span{
    &.gradiant-titulo{
      color: #1667d9;
    }
  }

`;

export default GlobalStyle;
