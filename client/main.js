'use strict';

const electron = require('electron');
const path = require('path')
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  var protocol = electron.protocol;
  /*
  protocol.registerFileProtocol('alien', function(request, callback) {
    var url
    url = request.url.substr(8);
    console.log(path.normalize(__dirname + '/' + url))
    callback({path: path.normalize(__dirname + '/' + url)});
  }, function (error) {
    if (error)
      console.error('Failed to register protocol')
  });
  */
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 800});

  // and load the index.html of the app.
  mainWindow.loadURL(path.normalize("file:///"+__dirname + '/' + 'app.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  //mainWindow.webContents.enableDeviceEmulation({screenPosition:'mobile'})

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
//app.dock.setBadge("new")
