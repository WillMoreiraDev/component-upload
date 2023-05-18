import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --secondary-01: #2E7A5D;
  --secondary-02: #4DA977;
  --secondary-03: #99CEB1;
  --secondary-04: #E6F3EC;
  --gray-01: #000000;
  --gray-02: #585858;
  --gray-03: #C4C4C4;
  --gray-04: #E8E8E8;
  --danger-01: #FFF0E2;
  --danger-02: #E9BE98;
  --danger-03: #F2994A;
}

@font-face {
    font-family: 'Forma DJR Text';
    src: url('/fonts/FormaDJRText-Bold.woff2') format('woff2'),
        url('/fonts/FormaDJRText-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Forma DJR Text';
    src: url('/fonts/FormaDJRText-Regular.woff2') format('woff2'),
        url('/fonts/FormaDJRText-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Editor';
    src: url('/fonts/Editor-Bold.woff2') format('woff2'),
        url('/fonts/Editor-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Yellowtail';
    src: url('/fonts/Yellowtail-Regular.woff2') format('woff2'),
        url('/fonts/Yellowtail-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Taprom';
    src: url('/fonts/Taprom-Regular.woff2') format('woff2'),
        url('/fonts/Taprom-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Epilogue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Forma DJR Text', sans-serif;
}

html {
  font-size: 62.5%;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}
`;
