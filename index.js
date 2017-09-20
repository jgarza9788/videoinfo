const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg')
const {app, BrowserWindow, ipcMain} = electron;

app.on('ready',()=>
	{
		console.log('app is ready');

		const mainWindow = new BrowserWindow({});
		// mainWindow.loadURL('file://${__dirname}\index.html');
		mainWindow.loadURL('file://' + __dirname + '/index.html');
    
	}
);


ipcMain.on('video:submit', (event, path)=>
{
	ffmpeg.ffprobe(path,(err,metadata)=>
	{
		console.log('duration is:', metadata.format.duration);
	}
	);
}
);

