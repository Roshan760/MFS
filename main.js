
//const {ElectronService}=require('ngx-electron')
const {app, BrowserWindow, ipcMain} = require('electron')
const { autoUpdater } = require('electron-updater');
  const url = require("url");
  const path = require("path");
  var temp=[];
  let mainWindow;
  let test;
  // var sqlite3 = require('sqlite3').verbose();
  // //var db = new sqlite3.Database('./table.db',sqlite3.OPEN_READWRITE,(err)=>{
  // var db = new sqlite3.Database('D:/MFS_Replacement_Code/my-app/infsay.db',sqlite3.OPEN_READWRITE,(err)=>{
  // if(err){
  // console.error(err.message);
  // }
  // console.log('connected')
  // });
  



  function createWindow () {
    console.log("start")
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
    console.log("started",mainWindow)
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
    // mainWindow.loadFile('.src/index.html');
    // mainWindow.loadFile('./dist/electron-demo/index.html')
    // mainWindow.loadURL(
    //   url.format({
    //     pathname: path.join(__dirname, `/dist/index.html`),
    //     protocol: "file:",
    //     slashes: true
    //   })
    // );
    // Open the DevTools.
    
    //mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
      console.log("closed")
      mainWindow = null
    })
    
    mainWindow.once('ready-to-show', () => {
      autoUpdater.checkForUpdatesAndNotify();
    });
  
    console.log(" outside auto updater1")
  }


  app.on('ready', () => {
    createWindow();
  });

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

  app.on('activate', function () {
    console.log("inside create window",mainWindow)
    if (mainWindow === null) createWindow()
   

  })
  ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
  });
  ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
  });
  // console.log("inside main")
  // ipcMain.on('Insert',(event,data)=>{
  //   console.log("inside res")
  //   console.log("data: ",data)
  //   console.log('Print to the main process terminal (STDOUT) when signal received from renderer process.');
  //   var stmt = db.prepare("INSERT INTO demo(Name) VALUES (?)");
  //   for (var i = 0; i < 1; i++) {
  //       stmt.run("Ipsum " + data);
  //   }
  //   // mainWindow.webContents.send('other-custom-signal', array);
  //   stmt.finalize();

  // })
  // ipcMain.on('Fetch',(event,data)=>{
  //   console.log("inside Fetch")
  //   console.log("data: ",data)
  //   //console.log('Print to the main process terminal (STDOUT) when signal received from renderer process.');
  //   db.each("SELECT * FROM mfs_task_details", function(err, row) {
  //     console.log(row)
  //     temp.push(row)
  //     });
  //     mainWindow.webContents.send('other-custom-signal', temp);
  // })
  autoUpdater.on('update-available', () => {
    console.log("update available");
    mainWindow.webContents.send('update_available');
  });
  autoUpdater.on('update-downloaded', () => {
    console.log("update downloaded");
    mainWindow.webContents.send('update_downloaded');
  });
