const { ipcRenderer } = require('electron');


function closeWin() {ipcRenderer.send('close');}
function minimizeWin() {ipcRenderer.send('minimize');}
function maximizeWin() {ipcRenderer.send('maximize');}