// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer;

//const printPDFButton = document.getElementById('print-pdf');
//printPDFButton.addEventListener('click', function (event){
   // ipc.send('print-to-pdf');
//})

//ipc.on('wrote-pdf', function (event, path){
   // const message = `Wrote PDF to: ${path}`;
  //  document.getElementById('pdf-path').innerHTML =  message;
//})