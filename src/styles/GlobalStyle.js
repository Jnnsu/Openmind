import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
