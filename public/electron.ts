import * as path from "path";
import { app, BrowserWindow } from "electron";
//import { createFileRoute } from "electron-router-dom";

const BASE_URL = "http://localhost:3000";

let mainWindow: BrowserWindow | null;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: false,
        },
    });

    mainWindow.once("ready-to-show", () => {
        mainWindow!.show();
    });

    mainWindow.loadFile(path.join(__dirname, "../build/index.html"))

    mainWindow.on("closed", (): void => {
        mainWindow = null;
    });
}

app.on("ready", (): void => {
    createMainWindow();
});

app.on("window-all-closed", (): void => {
    app.quit();
});

app.on("activate", (): void => {
    if (mainWindow === null) {
        createMainWindow();
    }
});
