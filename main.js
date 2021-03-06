// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
var path = require('path');
const electron = require('electron');
const fs = require('fs');
const os = require('os');
const ipc = electron.ipcMain;
const shell = electron.shell;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })


  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
      mainWindow.once('ready-to-show', () => {
        mainWindow.show()
      })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//ipc.on('print-to-pdf', function(event) {
  //const win = BrowserWindow.fromWebContents(event.sender);
  //console.log(os.tmpdir());
  //const pdfPath = path.join(os.tmpdir(), 'print.pdf');
  //const win = BrowserWindow.fromWebContents(event.sender);
  //console.log(win.webContents.print);
 // win.webContents.print({ silent: false, printBackground: false, deviceName: '' }, function(error, data) {
   // if (error) return console.log(error.message);

    //fs.writeFile(pdfPath, data, function(err) {
     // if (err) return console.log(err.message);
     // shell.openExternal('file://' + pdfPath);
     // event.sender.send('wrote-pdf', pdfPath);
    //})
  //})
//});