import "@components/SideMenu.css";
import React from "react";
import { Link } from "react-router-dom";

export function SideMenu({ target, children }: any) {
    return (
        <div className="sideMenu">
            <SideMenuBtn link="home" selected={target === "home"} />
            <SideMenuBtn
                link="notification"
                selected={target === "notification"}
            />
            <SideMenuBtn link="alliance" selected={target === "alliance"} />
            <SideMenuBtn link="war" selected={target === "war"} />
            <SideMenuBtn link="build" selected={target === "build"} />
            <SideMenuBtn link="trade" selected={target === "trade"} />
            <SideMenuBtn link="wiki" selected={target === "wiki"} />
        </div>
    );
}

function SideMenuBtn({ link, selected }: any) {
    return (
        <div>
            <button
                type="button"
                className={(selected ? "selected " : "") + link}
            >
                <Link to={`/${link.replace("home", "")}`}>
                    <img src={require(`@assets/${link}.svg`)} alt={link}></img>
                </Link>
            </button>
        </div>
    );
}
