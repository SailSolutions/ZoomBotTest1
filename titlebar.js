const customTitlebar = require('custom-electron-titlebar');

let MyTitleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2f2f2f'),
    menu: null,
    maximizable: false
});
