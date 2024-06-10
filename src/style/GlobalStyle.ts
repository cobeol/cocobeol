import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Noto Sans KR";
        margin: 0;
        padding: 0;
    }
        
    html,
    body {
        width: 100%;
        height: 100%;
    }
        
    body {
        background-color: #F0F2F5;
    }
        
    img {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        user-select: none;
        user-drag: none;
    }`;

export default GlobalStyle;

/*
        -khtml-user-select: none;
        -khtml-user-drag: none;
        -moz-user-select: none;
        -moz-user-drag: none;
        -o-user-select: none;
        -o-user-drag: none;
*/
