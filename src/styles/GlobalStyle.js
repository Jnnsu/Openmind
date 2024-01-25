import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --Grayscale-60: #000;
    --Grayscale-50: #515151;
    --Grayscale-40: #818181;
    --Grayscale-30: #CFCFCF;
    --Grayscale-20: #F9F9F9;
    --Grayscale-10: #FFF;

    --Brown-50: #341909;
    --Brown-40: #542F1A;
    --Brown-30: #C7BBB5;
    --Brown-20: #E4D5C9;
    --Brown-10: #F5F1EE;

    --Blue-50: #1877F2;
    --Yellow-50: #FEE500;
    --Red-50: #B93333;

    --Shadow-1pt: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
    --Shadow-2pt: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --Shadow-3pt: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    }

  body {
    font-family: Pretendard;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;
