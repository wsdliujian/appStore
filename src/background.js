'use strict'

import { app, protocol, BrowserWindow ,ipcMain} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const fs = require('fs')
const compressing=require('compressing')
const child_process = require('child_process')

/*const  appPath="D:/temp/"
const  srcPath="D:/Proj/"*/
const  appPath="/home/temp/"
const  srcPath="/home/Proj/"
//const appPath=app.getAppPath();
//const preload=path.join(appPath, 'preload.js')
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: true,
    //去掉标题
    //frame:false,
    //默认占满全屏
    //fullscreen: true,
    webPreferences: {
      //preload,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      //nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      webSecurity:false
    }

  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    //去掉工具栏
    //win.setMenu(null);
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST){
      win.webContents.openDevTools()
    }

  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
//下载路径
  win.webContents.session.on('will-download', (event, item, webContents) => {
    let filePath = path.join(appPath, item.getFilename());
    if(item.getFilename()=='login bad'){
      win.webContents.send('loginBad', 'login bad');
      filePath=appPath;
    }
    if(item.getFilename()=='File not found'){
        win.webContents.send('badFile', 'File not found');
      filePath=appPath;
    }
      item.setSavePath(filePath);
      console.log("file",filePath);

    item.once('done', (event, state) => {
      if (state === 'completed') {
        //这里是主战场,解压文件
        if(item.getFilename().lastIndexOf(".zip")>0){
          compressing.zip.uncompress(filePath, filePath.replace(".zip",""))
              .then(() => {
                console.log('success');
              })
              .catch(err => {
                console.error(err);
              })

        }else if(item.getFilename().lastIndexOf(".exe")>0){
          //执行exe文件，传入路径
          child_process.execFile(filePath);

        }
      } else if (state=="cancelled") {
        //...
      }else{
        //...
      }
    })
  })

  ipcMain.on("sendMessage",(event,data) => {
    const path=srcPath;
    let readDir=fs.readdirSync(path);
    event.sender.send(data, readDir);

  })



  ipcMain.on("openApp",(event,data) => {
    const path02=srcPath;
    let appPath02=path.join(path02, data);
    appPath02=path.join(appPath02, data+".exe");
    console.log('appPath',appPath02);
    //执行exe文件，传入路径
    child_process.execFile(appPath02);
  })

  ipcMain.on("searchChannel",(event,data) => {
    event.sender.send(data.channelName, data.value);
  });

}




// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})
//开机自启配置
const ex = process.execPath
app.setLoginItemSettings({
  openAtLogin: true,
  path: ex,
  args: [],
})


// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
