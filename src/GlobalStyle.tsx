import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'brandon-grotesque', 'Oswald', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'brandon-grotesque', 'Oswald', sans-serif;
    font-weight: 501;
  }

  p, span, li {
    font-family: 'brandon-grotesque', 'Oswald', sans-serif;
    font-weight: 300;
  }
`;

export default GlobalStyle;
