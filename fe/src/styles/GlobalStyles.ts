import { createGlobalStyle } from "styled-components";

import GeneralSansRegular from "../assets/fonts/GeneralSans-Regular.otf";
import GeneralSansSemibold from "../assets/fonts/GeneralSans-Semibold.otf";
import GeneralSansBold from "../assets/fonts/GeneralSans-Bold.otf";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegular}') format('otf'),
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansSemibold}') format('otf'),
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansBold}') format('otf'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
