import { app, BrowserWindow, Tray, Menu, nativeImage } from 'electron'

import iconPath from '../assets/image/logo.jpg'

const createMainWindow = () => {
  return new BrowserWindow({
    title: 'Main window',
    autoHideMenuBar: true,
    hiddenInMissionControl: true,
    minWidth: 720
  })
}

const createMenu = (win: BrowserWindow) => {
  const icon = nativeImage.createFromDataURL(iconPath)
  const tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '退出',
      click() {
        win.destroy()
        app.quit()
      }
    }
  ])

  tray.setToolTip('Tool Tip')
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    win.show()
  })
}

app.whenReady().then(() => {
  const win = createMainWindow()
  createMenu(win)

  if (!app.isPackaged && process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile('.output/public/index.html')
  }
})
