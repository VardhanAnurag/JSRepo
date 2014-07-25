
//pageReady function fired by Framework
function pageReady()
{
	
}

//To test that Custom Scrolling method works
function scrollHere()
{
	//$("divWrite").innerHTML += "scrolling" + "<br/>";
}

window.onerror = function(msg, url, line)
{
   alert("Error: " + msg + "\nurl: " + url + "\nline #: " + line);
   var suppressErrorAlert = true;
   return suppressErrorAlert;
};