const { app, BrowserWindow } = require('electron');


function createWindow() {
    // Create the browser window.

    let win = new BrowserWindow({
        width: 1100,
        height: 800,
        maximizable: false,
        fullscreenable: false,
        resizable: false,
        frame: false,
        transparent: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)
