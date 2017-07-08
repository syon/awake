'use strict';

const NodeStatic = require('node-static');
const HTTP = require('http');
const Electron = require("electron");

const PORT = 7170;

const file = new NodeStatic.Server(__dirname + '/public');
HTTP.createServer((request, response) => {
  request.addListener('end', () => {
    file.serve(request, response);
  }).resume();
}).listen(PORT);

let mainWindow;
Electron.app.on('ready', () => {
  mainWindow = new Electron.BrowserWindow({
    width: 1000,
    height: 700,
    resizable: true,
    alwaysOnTop: false,
    movable: true,
  });

  mainWindow.loadURL(`http://localhost:${PORT}/index.html`);

  mainWindow.on('closed', () => {
    electron.session.defaultSession.clearCache(() => {});
    mainWindow = null;
  });
});

Electron.app.on('window-all-closed', () => Electron.app.quit());
