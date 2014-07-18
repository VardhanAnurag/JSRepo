var divLoader = null;
var divLoaderBar = null;
var divLoaderText = null;

function createLoader()
{
	divLoader = createDiv("divLoader","loader");
	divLoader.style.width = "100%";
	createLoaderBar();
	divLoader.appendChild(divLoaderBar);
	createLoaderText();
	divLoader.appendChild(divLoaderText);
	
	return divLoader;
}

function createLoaderBar()
{
	divLoaderBar = createDiv("divLoaderBar","loaderBar");	
}

function createLoaderText()
{
	divLoaderText = createDiv("divLoaderText","loaderText");	
}

function progressBarCallBack(filesDownloaded,totalFiles)
{
	var progressBarText=Math.round((filesDownloaded * 100)/totalFiles) + "% downloaded";
	var progressBarWidth=Math.round((filesDownloaded * 100)/totalFiles);
	divLoaderBar.style.width=progressBarWidth + '%';
	divLoaderText.innerHTML=progressBarText;
	
}