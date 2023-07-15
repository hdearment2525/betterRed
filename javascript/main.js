const {app, BrowserWindow} = require('electron')
require('electron-reload')(__dirname);

let splash;
let mainWindow;

function createWindow() {
    // create the splash window
    splash = new BrowserWindow({width: 805, height: 605, transparent: true, frame: false, alwaysOnTop: true});
    splash.loadFile('html/splash.html');

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: `${__dirname}/bettered-logo.bmp`,
        show: false // this will hide the main window until its content is loaded
    })

    mainWindow.loadFile('html/index.html');

    // when the content has finished loading, show the window and hide the splash screen
    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            splash.destroy();
            mainWindow.show();
        }, 1000); // 5 seconds delay
    });
}

app.whenReady().then(createWindow);