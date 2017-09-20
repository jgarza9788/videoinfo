const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg')
const {app, BrowserWindow, ipcMain} = electron;

let mainWindow;


app.on('ready',()=>
{
	console.log('app is ready');

	mainWindow = new BrowserWindow({});

	/*code given by instructor that did not work*/
	// mainWindow.loadURL('file://${__dirname}\index.html');
	
	mainWindow.loadURL('file://' + __dirname + '/index.html');

});


ipcMain.on('video:submit', (event, path)=>
{

	/*code given by instructor that did not work*/
	/*
	ffmpeg.ffprobe(path,(err,metadata)=>
	{
		console.log('check check 1 2');
		//console.log('duration is:', metadata.format.duration);
	}
	);
	*/

	//i have ffmpeg installed in two paths
	//ffmpeg.setFfprobePath('C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffprobe.exe');
	ffmpeg.setFfprobePath('C:\\ffmpeg\\bin\\ffprobe.exe');
	ffmpeg.ffprobe(path,function(err, metadata) 
	{
		/*show all data*/
		//console.log(require('util').inspect(metadata, false, null));
		
		console.log('duration is:', metadata.format.duration);
		mainWindow.webContents.send('video:metadata',metadata.format.duration);
	});
}
);

