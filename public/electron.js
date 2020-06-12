/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow, Menu, globalShortcut, nativeTheme } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const contextMenu = require('electron-context-menu');

let win;
Menu.setApplicationMenu(null);

const indexPath = path.join(__dirname, '..', 'build', 'index.html');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
nativeTheme.themeSource = 'dark';

async function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: path.resolve(__dirname, '..', 'assets', 'logo.png'),
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } //
  else {
    await win.loadURL(`file://${indexPath}`);
  }
}

app.on('ready', () => {
  createWindow();
  win.maximize();
  mainWindowContextMenu(win);

  if (process.env.NODE_ENV === 'development') {
    globalShortcut.register('f12', () => win.toggleDevTools());
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// add context-menu in webviews
app.on('web-contents-created', (e, contents) => {
  webViewContextMenu(contents);
});

// FUNCTIONS
function mainWindowContextMenu(window) {
  contextMenu({
    window: window,
    labels: {
      copy: 'Copiar',
      paste: 'Colar',
      copyLink: 'Copiar link',
      lookUpSelection: 'Consultar “{selection}”',
      cut: 'Recortar',
    },
    showSearchWithGoogle: false,
    showInspectElement: false,
    showCopyImage: false,
    showCopyImageAddress: false,
  });
}

function webViewContextMenu(window) {
  if (window.getType() == 'webview') {
    contextMenu({
      prepend: (defaultActions, params, browserWindow) => [
        {
          label: 'Pesquisar no Google',
          visible: !!params.selectionText,
          click: () => {
            BrowserWindow.getFocusedWindow().webContents.send(
              'new_tab',
              `https://google.com/search?q=${params.selectionText}`,
            );
          },
        },
      ],
      window: window,
      labels: {
        copy: 'Copiar',
        paste: 'Colar',
        copyLink: 'Copiar link',
        copyImage: 'Copiar imagem',
        saveImageAs: 'Guardar imagen como…',
        lookUpSelection: 'Consultar “{selection}”',
        cut: 'Recortar',
        inspect: 'Inspecionar Elemento',
      },
      showSearchWithGoogle: false,
      showInspectElement: true,
      showCopyImage: false,
      showSaveImage: false,
      showSaveImageAs: false,
    });

    window.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault();
    });
  }
}
