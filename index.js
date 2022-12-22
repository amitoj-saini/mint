const {app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        //resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    // ipc events
    ipcMain.on('minimize', () => {
        win.isMinimized() ? win.restore() : win.minimize();
    });

    ipcMain.on('close', () => {
        win.destroy(); // kills everything!
    });

    ipcMain.on('maximize', () => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
    });

    win.loadFile('src/index.html');
}


app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});