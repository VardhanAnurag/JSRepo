<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="Cache-Control" Content="no-cache">
	<meta http-equiv="Pragma" Content="no-cache">
	<meta http-equiv="Expires" Content="0">
	<title>Progress Bar Demo</title>
	<!-- uncomment when we are not using merging and compressing of JS and Css -->
	<script language="JavaScript" src="./assets/javascript/com/org/common/domReady.js">
	</script>
	<script language="JavaScript" src="./assets/javascript/com/org/common/event.js">
	</script>
	<script language="JavaScript" src="./assets/javascript/com/org/common/hashTable.js">
	</script>
	<script language="JavaScript" src="./assets/javascript/com/org/common/util.js">
	</script>
	<script language="JavaScript" src="./assets/javascript/progressBarDemo.js">
	</script>
	
	<!-- uncomment when we are using merging and compressing of JS and Css 
	<script language="JavaScript" src="./js/applicationMerged.min.js">
	</script>
	<link rel="stylesheet" type="text/css" href="./css/applicationMerged.min.css">
	</link>	 
	-->
</head>
<body>
	<DIV style="WIDTH: 100%" id=divTitleBar class=titleBar>Connect has detected new version .. Updating files<A style="PADDING-RIGHT: 10px; FLOAT: right; CLEAR: both; TEXT-DECORATION: none" class=closeButton href="javascript:void(0)">X</A></DIV>
	<DIV style="PADDING-BOTTOM: 25px; PADDING-LEFT: 25px; WIDTH: 600px; PADDING-RIGHT: 25px; PADDING-TOP: 25px" id=divParentLoader>
	<DIV style="WIDTH: 100%" id=divLoader class=loader>
	<DIV id=divLoaderBar class=loaderBar></DIV>
	<DIV id=divLoaderText class=loaderText></DIV></DIV><BUTTON>Click</BUTTON></DIV>
			
			<button type="button" onclick="loadIt();">Click Me!</button>
		<!--<div id="fade"></div>
		<div id="overlay">
			<div style="width:500px; padding:50px;">
				<div id="divLoader">
					<div id="divLoaderBar">
					</div>
					<div id="divLoaderText">
					</div>
				</div>
			</div>
			<button type="button" onclick="loadIt();">Click Me!</button>
		</div>-->
		<div style="width: 90%; padding: 5px; color : white; background-color: #3D72C0;">
			Login Dialog
			<a href="#" style="text-decoration:none;color:#FFFFFF;float:right;clear:both;">X</a>
		</div>
		<a onclick="showModal(createParentLoader(),'Connect has detected new version .. Updating files',true);" href="javascript:void(0)">Click here to open the overlay</a>
		<!--<a onclick="document.getElementById('overlay').style.display='none';document.getElementById('fade').style.display='none'"
	    href="javascript:void(0)">Click here to open the overlay </a> -->
</body>
</html>
