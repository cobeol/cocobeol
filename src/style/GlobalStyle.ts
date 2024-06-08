import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Noto Sans KR" !important;
        margin: 0;
        padding: 0;
    }
        
    html,
    body {
        width: 100%;
        height: 100%;
    }
        
    body {
        background-color: #F0F2F5
    }`;

export default GlobalStyle;
