var dicData = new HashTable();

//Position can be "head" or "body"
function includeJavaScriptFile(position,filePath,callback)
{
    if(filePath)
    {
        if(!position)
        {
            position = "head";
        }
        var domPosition = document.getElementsByTagName(position)[0];
        var script = document.createElement("script");
        script.setAttribute("type","text/javascript");
        script.setAttribute("src",filePath);
        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if(callback)
        {
            script.onreadystatechange= function ()
            {
                if (this.readyState == "complete")
                {
                    callback();
                }
            };
            script.onload = callback;
        }
        domPosition.appendChild(script);
    }
}

function includeCssFile(filePath,callback)
{
    if(filePath)
    {
        var domPosition = document.getElementsByTagName("head")[0];
        var cssFile = document.createElement("link");
        cssFile.setAttribute("rel", "stylesheet");
        cssFile.setAttribute("type", "text/css");
        cssFile.setAttribute("href", filePath);
        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if(callback)
        {
            cssFile.onreadystatechange= function ()
            {
                if (this.readyState == "complete")
                {
                    callback();
                }
            };
            cssFile.onload = callback;
        }
        domPosition.appendChild(cssFile);
    }
}

function $(elementId)
{
	if(elementId && elementId.length > 0)
	{
		return document.getElementById(elementId);
	}
	return null;
}

function createDiv(id,styleName)
{
    var div = document.createElement("div");  
    div.id = id;  
    if(styleName)
    {
        div.className = styleName;   
    }
    return div;
}

function setDivVisibility(id,isVisible)
{
    var div = document.getElementById(id);
    if(div)
    {
        if(isVisible)
        {
            div.style.display = "block";
        }
        else
        {
            div.style.display = "none";
        }
    }
}

function removeDiv(id)
{
    var div = document.getElementById(id);
    if (div)
    {
        var parent = div.parentNode;
        if(parent)
        {
            parent.removeChild(div);
        }
    }
}

function setData(elementId,propertyName,propertyValue)
{
    var element = $(elementId);
    //elementId.nodeType = 1 when parameter is html Element else its a property
    if(isElement(element) && propertyName && propertyName.length > 0)
    {
        /*if(element.hasAttribute(propertyName))
        {
            element.removeAttribute(propertyName);
        }
        element.setAttribute(propertyName,propertyValue);*/
        var key = elementId + "-" + propertyName;
        if(dicData.containsKey(key))
        {
            dicData.remove(key);
        }
        dicData.put(key,propertyValue);
    }
}

function getData(elementId,propertyName)
{
    var element = $(elementId);
    //elementId.nodeType = 1 when parameter is html Element else its a property
    if(element && element.nodeType === 1 && propertyName && propertyName.length > 0)
    {
        var key = elementId + "-" + propertyName;
        var value = null;
        if(dicData.containsKey(key))
        {
            value= dicData.get(key);
            if(isString(value))
            {
                try
                {                
                    value = value === "true" ? true :                    
                            value === "false" ? false :                    
                            value === "null" ? null :                                        
                            value;
                }
                catch(exception)
                {
                }
            }
        }
        return value;
    }
    return null;
}

function removeData(elementId,propertyName)
{
    var element = $(elementId);
    //elementId.nodeType = 1 when parameter is html Element else its a property
    if(element && element.nodeType === 1 && propertyName && propertyName.length > 0)
    {
        var key = elementId + "-" + propertyName;
        if(dicData.containsKey(key))
        {
            return dicData.remove(key);
        }
    }
    return undefined;
}

/*Utility Methods */
function getKeys(object) 
{
    var keys = [];
    for (var property in object)
    {
    	keys.push(property);
    }
    return keys;
}

function getValues(object)
{
	var values = [];
	for (var property in object)
	{
		values.push(object[property]);
	}
	return values;
}
   
function clone(object) 
{
    return Object.extend({ }, object);
}

function isElement(refElement)
{
    return !!(refElement && refElement.nodeType == 1);
}

function isArray(refArr) 
{
    return refArr != null && typeof refArr == "object" &&
      "splice" in refArr && "join" in refArr;
}

function isVariable(variableName) 
{
	return !isUndefined(window[variableName]); 
}

function callFunction(functionName) 
{
	if (typeof window[functionName] === "function") 
	{
	    window[functionName](); 
	}
}

function isFunction(refFunction) 
{
    if(refFunction && typeof refFunction == "function")
    {
    	return true;
    }
    return false;
}

function isString(object) 
{
    return typeof object == "string";
}

function isNumber(object) 
{
    return typeof object == "number";
}
  
function isUndefined(object) 
{
    return typeof object == "undefined";
}

/*
 * 1001 - function validation failure
 */
function throwException(exceptionCode,exceptionName,exceptionDetails)
{
    //alert("Error Occured with details code: " + exceptionCode + ",name: " + exceptionName + ",details: " + exceptionDetails);
    throw{code: exceptionCode,name: exceptionName,details: exceptionDetails};
}

//other values of navigator.appName is "Netscape","Opera"
//From IE 11 navigator.appName returns "Netscape" instead of "Microsoft Internet Explorer"
//and From IE 11 it follows standard API.
function isBrowserIE()
{
    if(navigator && navigator.appName && navigator.appName == "Microsoft Internet Explorer")
    {
        return true;
    }
    return false;
}






