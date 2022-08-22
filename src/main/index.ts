import { app, BrowserWindow } from "electron";

import createMainWindow from "./createMainWindow";

let mainWin: BrowserWindow = null;

app.disableHardwareAcceleration();

const isWinner = app.requestSingleInstanceLock();

export const isDev = !app.isPackaged;

if (!isWinner) app.quit();

app.on("second-instance", () => mainWin?.show());

app.on("ready", () => {
  if (process.platform === "darwin") app.dock.hide();
  mainWin = createMainWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWin = createMainWindow();
  }
});

export { mainWin };
