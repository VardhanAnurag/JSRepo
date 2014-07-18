var LOADING_MESSAGE="Connect has detected new version .. Updating files";
var divParentLoader = null;
var divMessage = null;
var isProgessBarShown=false;
var progressTimer = null;
var count = 0;
var totalCount=38;

//called when DOM is initialised
//TODO::should move out of of this file
function apiReadyHandler()
{
	callFunction("pageReady");
}

function pageReady()
{
	//uncomment when we are not using merging and compressing of JS and Css
	includeFiles();
	loadHandler();
}

function includeFiles()
{
	includeJavaScriptFile("head","./assets/javascript/com/org/overlay/overlay.js");
	includeCssFile("./assets/css/com/org/overlay/overlay.css");
	includeJavaScriptFile("head","./assets/javascript/com/org/progressBar/progressBar.js");
	includeCssFile("./assets/css/com/org/progressBar/progressBar.css");
}

function loadHandler()
{
	progressTimer=setInterval(function(){progressBarProgress();},1000);
}

function createParentLoader()
{
	divParentLoader = new createDiv("divParentLoader");
	divParentLoader.style.padding = "25px";
	divParentLoader.style.paddingTop = "7%";
	//divParentLoader.style.width = "600px";
	divParentLoader.appendChild(createLoader());
	
	divMessage = new createDiv("divMessage");
	//start of center align of div
	divMessage.style.margin = "auto";
	divMessage.style.width = "70%";
	//end of center align of div
	divMessage.style.fontWeight="bold";
	divMessage.innerHTML=LOADING_MESSAGE;
	
	divParentLoader.appendChild(divMessage);
	return divParentLoader;
}

function progressBarProgress()
{
	if(!isProgessBarShown)
	{
		isProgessBarShown=true;
		createParentLoader();
		showModal(divParentLoader,LOADING_MESSAGE,true,true);
	}
	loadProgress();
}

function loadProgress()
{	
	count++;
	if(count>totalCount)
	{
		count=0;
	}
	progressBarCallBack(count,totalCount);
}

//Global Exception Handler
window.onerror = function(msg, url, line) 
{
	// You can view the information in an alert to see things working
	// like so:
   alert("Error: " + msg + "\nurl: " + url + "\nline #: " + line);

   // TODO: Report this error via ajax so you can keep track
   //       of what pages have JS issues

   var suppressErrorAlert = true;
   // If you return true, then error alerts (like in older versions of 
   // Internet Explorer) will be suppressed.
   return suppressErrorAlert;
};