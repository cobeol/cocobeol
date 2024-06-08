import Alliance from "@pages/Alliance";
import Build from "@pages/Build";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";
import Notification from "@pages/Notification";
import Trade from "@pages/Trade";
import War from "@pages/War";
import Wiki from "@pages/Wiki";

export const RouterInfo = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/notification",
        element: <Notification />,
    },
    {
        path: "/alliance",
        element: <Alliance />,
    },
    {
        path: "/war",
        element: <War />,
    },
    {
        path: "/build",
        element: <Build />,
    },
    {
        path: "/trade",
        element: <Trade />,
    },
    {
        path: "/wiki",
        element: <Wiki />,
    },
    {
        path: "/*",
        element: <NotFound />,
    },
];