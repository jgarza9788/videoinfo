const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready',()=>
	{
		console.log('app is ready');

		const mainWindow = new BrowserWindow({});
		mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.loadURL('file://${__dirname}\index.html');
    // mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));



	}
);
