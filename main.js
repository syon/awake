'use strict';

const PORT = 7170;

var nodeStatic = require('node-static');
var file = new nodeStatic.Server(__dirname + '/public');

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    file.serve(request, response);
  }).resume();
}).listen(PORT);

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', () => app.quit());
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    resizable: true,
    alwaysOnTop: false,
    movable: true,
  });

  mainWindow.loadURL(`http://localhost:${PORT}/index.html`);

  mainWindow.on('closed', () => mainWindow = null );
});
