import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { RouterInfo } from "@utils/router";
//import Header from "@components/Header";
import { ThemeProvider } from "styled-components";
import { dark } from "@style/Theme";
import GlobalStyle from "@style/GlobalStyle";

const RouterObject = createHashRouter(RouterInfo);
//CreateBrowserRouter로 경로 지정

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <RouterProvider router={RouterObject} />
        </ThemeProvider>
    </React.StrictMode>
);
