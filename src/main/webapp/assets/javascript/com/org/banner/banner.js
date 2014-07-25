var _arrOpenDiv = null;
var _bannerUniqueId = null;
var _pageScrollHandler = null;

function apiReadyHandler()
{
	_pageScrollHandler = window.onscroll;
	window.onscroll = scrollHandler;
	_arrOpenDiv = new Array();
	_bannerUniqueId = getUniqueId();
	callFunction("pageReady");
}

function Banner()
{
	 this.INFO_TITLE = "info";
	 this.WARNING_TITLE = "warning";
	 this.ERROR_TITLE = "error";
	 this.info = bannerInfo;
	 this.warning = bannerWarning;
	 this.error = bannerError;
}

function bannerInfo(message)
{
	new createDialog(getBannerId(this.INFO_TITLE),"infoBanner",message);
}

function bannerWarning(message)
{
	new createDialog(getBannerId(this.WARNING_TITLE),"warningBanner",message);
}

function bannerError(message)
{
	new createDialog(getBannerId(this.ERROR_TITLE),"errorBanner",message);
}


function createDialog(id,styleClass,message)
{
     var divBanner=document.getElementById(id);
     if(!divBanner)
     {
        divBanner=document.createElement("div");
        divBanner.id = id;
        document.body.insertBefore(divBanner,document.body.childNodes[0]);
     }
     if(styleClass && styleClass.length > 0)
     {
        divBanner.className=styleClass;
     }   
     divBanner.style.width = "100%";
     divBanner.innerHTML = message;
     //since innerHTML has been overridden hence we need to the button again(every time)
     var btnClose = createBannerCloseButton();
     divBanner.appendChild(btnClose);
     
	 updateOpenBanner(id,"insert");
     return divBanner;
}

function createBannerCloseButton()
{
    var btnClose = document.createElement("a");
    btnClose.setAttribute("href","javascript:void(0)");
    btnClose.className = "closeBannerButton";
    btnClose.onmouseover = function() { this.className = "closeBannerButton_hover"; };
    btnClose.onmouseout = function() { this.className = "closeBannerButton"; };
    btnClose.style.textDecoration="none";
    if(isBrowserIE())
    {
        btnClose.style.styleFloat = "right";
    }
    else
    {
        btnClose.style.cssFloat = "right";
    }
    btnClose.style.clear = "both";
    btnClose.style.paddingRight = "10px";
    btnClose.innerHTML = "X";
    btnClose.onclick = hideModal;
    return btnClose;
}

//operation value can be "insert","remove"
function updateOpenBanner(id,operation)
{
	if(!_arrOpenDiv)
	{
		_arrOpenDiv = new Array();
	}
	if(operation === "insert" && _arrOpenDiv.indexOf(id) === -1)
	{
		_arrOpenDiv.splice(0,0,id);
	}
	else if(operation === "remove" && _arrOpenDiv.indexOf(id) > -1)
	{
		_arrOpenDiv.splice(_arrOpenDiv.indexOf(id),1);
	}
}

function hideModal(event)
{
    var target = getTarget(event);
    if(target && target.parentNode)
    {
		var divBannerId = target.parentNode.id;
        removeDiv(divBannerId);
		updateOpenBanner(divBannerId,"remove");
    }
}

function scrollHandler(event)
{  
   if(_pageScrollHandler)
   {
	   _pageScrollHandler();
   }
   positionBanner(document.getElementById(getBannerId(new Banner().INFO_TITLE)),"fixedElement");
   positionBanner(document.getElementById(getBannerId(new Banner().WARNING_TITLE )),"fixedElement");
   positionBanner(document.getElementById(getBannerId(new Banner().ERROR_TITLE)),"fixedElement");
   
   var topPos = scrollTop(document.body);
   for(var count = 0; count < _arrOpenDiv.length ;count++)
   {
		var divBanner = document.getElementById(_arrOpenDiv[count]);
		divBanner.style.top = ((count * 20) + topPos) + "px";
   }
}

function positionBanner(divBanner,styleName)
{
   if(divBanner)
   {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > divBanner.offsetHeight)
        {
            addStyleClass(divBanner,styleName);
        }
        else
        {
            removeStyleClass(divBanner,styleName);
        }
   }
}

//bannerType can be "info","warning","error"
function getBannerId(bannerType)
{
	return "div" + _bannerUniqueId +  bannerType;
}
