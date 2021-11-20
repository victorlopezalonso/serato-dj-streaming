import { app, ipcMain, dialog } from "electron";

ipcMain.handle("read-file", async () =>
  dialog.showOpenDialog({
    properties: ["openDirectory", "multiSelections"],
  })
);

ipcMain.handle("showDialog", async (params) =>
  dialog.showMessageBox(params)
);

ipcMain.handle("showOpenDialog", async (event, params) =>
  dialog.showOpenDialog(params)
);

ipcMain.handle("getAppPath", async () => app.getPath("userData"));
