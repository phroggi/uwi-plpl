import { BrowserWindow, BrowserWindowConstructorOptions, shell } from "electron";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const winOptions: BrowserWindowConstructorOptions = {
  width: 970,
  height: 600,
  show: false,
  frame: false,
  resizable: false,
  maximizable: false,
  fullscreenable: false,
  webPreferences: { preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY }
};

const createMainWindow = () => {
  const win = new BrowserWindow(winOptions);

  win.removeMenu();
  win.once("ready-to-show", () => win.show());

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  return win;
};
export default createMainWindow;
