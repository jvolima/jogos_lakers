import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/background.png"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: #260273
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`