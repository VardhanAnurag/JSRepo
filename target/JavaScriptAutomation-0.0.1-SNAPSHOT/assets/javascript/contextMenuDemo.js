var contextMenu = [
	                   	{label:"Menu 1", clickHandler:menu1, separatorBefore:true},
	                   	{label:"Menu 2", clickHandler:menu2, separatorBefore:true},
	                   	{label:"Menu 3", clickHandler:menu3, separatorBefore:true},
	                   	{label:"Menu 4", clickHandler:menu4, separatorBefore:true},
	                   	{label:"Menu 5", clickHandler:menu5, separatorBefore:true}
	                  ];
	
function pageReady()
{
	setData("lblTest","enableContextMenu",true);
	setData("lblTest","contextMenuSource",contextMenu);
}

function menu1()
{
	alert("menu1");
}

function menu2()
{
	alert("menu2");
}

function menu3()
{
	alert("menu3");
}

function menu4()
{
	alert("menu4");
}

function menu5()
{
	alert("menu5");
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