
var _replaceContext = false;		// replace the system context menu?
var _mouseOverContext = false;		// is the mouse over the context menu?
var _noContext = false;				// disable the context menu?

function apiReadyHandler()
{
	initContext();
	callFunction("pageReady");
}

function initContext()
{
	createContextMenuDiv();
	document.onmousedown = contextMouseDown;
	document.oncontextmenu = contextShow;
}
 
// call from the onMouseDown event, passing the event if standards compliant
function contextMouseDown(event)
{
	if (_noContext || _mouseOverContext)
	{
		return;
	}	
	event = getEvent(event);
	var target = getTarget(event);
 
	// only show the context menu if the right mouse button is pressed
	//   and a target has enableContextMenu property set
	if (event.button === 2 && getData(target.id,"enableContextMenu") === true)
	{
		_replaceContext = true;
	}
	else if (!_mouseOverContext)
	{
		setContextMenuDivVisibility(false);
	}
}
 
// call from the onContextMenu event, passing the event
// if this function returns false, the browser's context menu will not show up
function contextShow(event)
{
	if (_noContext || _mouseOverContext)
	{
		return;
	}	
	event = getEvent(event);
	var target = getTarget(event);
	if (_replaceContext && target) 
	{
		var arrContextMenu = getData(target.id,"contextMenuSource");
		if(arrContextMenu)
		{
			createContextMenu(getData(target.id,"contextMenuSource"));
			// document.body.scrollTop does not work in IE
			var scrollTop = document.body.scrollTop ? document.body.scrollTop :
				document.documentElement.scrollTop;
			var scrollLeft = document.body.scrollLeft ? document.body.scrollLeft :
				document.documentElement.scrollLeft;
	 
			// hide the menu first to avoid an "up-then-over" visual effect
			var _divContext = $("divContext");
			setContextMenuDivVisibility(false);
			_divContext.style.left = event.clientX + scrollLeft + 'px';
			_divContext.style.top = event.clientY + scrollTop + 'px';
			setContextMenuDivVisibility(true);
	 
			_replaceContext = false;
	 
			return false;
		}
	}
}
 
function enableContext()
{
	_noContext = false;
	_mouseOverContext = false; // this gets left enabled when "disable menus" is chosen
 
	return false;
}

function disableContext()
{
	_noContext = true;
	closeContext();
 
	return false;
}

function closeContext()
{
	setContextMenuDivVisibility(false);
}

function createContextMenu(arrContextMenu)
{
	var _divContext = $("divContext");
	while (_divContext.firstChild) 
	{
		_divContext.removeChild(_divContext.firstChild);
	}
	if(arrContextMenu.length > 0)
	{
		var contextMenuContainer=document.createElement("ul");
		contextMenuContainer.className = "contextContainer";  
		for (var count = 0; count < arrContextMenu.length; count++) 
		{
			var objContextMenu=arrContextMenu[count];
			if(objContextMenu)
			{
				 var contextMenuParent=document.createElement('li');
				 var contextMenu = document.createElement("a");
				 contextMenu.setAttribute("href","javascript:void(0)");
				 contextMenu.className = "contextMenu";
				 contextMenu.innerHTML = objContextMenu.label;
				 contextMenu.data = objContextMenu;
				 contextMenu.onclick = contextMenuClickHandler;
				 
				 contextMenuParent.appendChild(contextMenu);
				 contextMenuContainer.appendChild(contextMenuParent);
			}
		}
		_divContext.appendChild(contextMenuContainer);
	}
}

function contextMenuClickHandler(event)
{
	closeContext();
	// IE is evil and doesn't pass the event object
	if (!event)
	{
		event = window.event;
	}
	if(event)
	{
		target = (event.target) ? event.target : event.srcElement;
		if(target)
		{
			var objContextMenu = target["data"];
			if(objContextMenu && objContextMenu.clickHandler)
			{
				 objContextMenu.clickHandler();
			}
		}
	}
}

function createContextMenuDiv()
{
    var divContext = createDiv("divContext");
    divContext.style.display = "none";
    divContext.style.position = "absolute";
    divContext.style.border="1px solid blue";
    divContext.onmouseover = function() { _mouseOverContext = true; };
    divContext.onmouseout = function() { _mouseOverContext = false; };

    document.body.appendChild(divContext);  
}

function setContextMenuDivVisibility(isVisible)
{
    setDivVisibility("divContext",isVisible);
}

function removeContextMenuDiv()
{
    removeDiv("divContext");
}

function getEvent(event)
{
	// IE is evil and doesn't pass the event object
	if (!event)
	{
		event = window.event;
	}
	return event;
}

function getTarget(event)
{
	// we assume we have a standards compliant browser, but check if we have IE
	event = getEvent(event);
	var target = event.target ? event.target : event.srcElement;
	return target;
}
