import { createGlobalStyle } from "styled-components";
import BiotifLight from "../assets/fonts/Biotif-Light.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Biotif-Light";
    src: url(${BiotifLight}) format('truetype');
}

html, body, h1, a, code {
    background-color: black;
    color: white;
    font-family: Biotif-Light, Helvetica Neue, Helvetica,Arial,sans-serif;
    font-size: 20px;
   

}

button {
    font-family: Biotif-Light, Helvetica Neue, Helvetica,Arial,sans-serif;
}



`;

export default GlobalStyles;
