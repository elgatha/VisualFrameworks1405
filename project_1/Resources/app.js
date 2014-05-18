//Elgatha Lee
//1405
//VFW


Ti.UI.setBackgroundColor("#999");

var mainWindow = Ti.UI.createWindow({
	title:"Me",
	modal: true,
	backgroundColor: "#74bf13"
});

var messageView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 240,
	top: 70,
	left: 20,
	right: 20,
	borderRadius: 10
});
	
var buttonLeftView = Ti.UI.createView({
	backgroundColor: "#efef99",
	top: messageView.top + messageView.height + 20,
	left: 20,
	width: 100,
	height: 50,
	borderRadius: 10
});

var buttonRightView = Ti.UI.createView({
	backgroundColor: "#efef99",
	top: messageView.top + messageView.height + 20,
	right: 20,
	width: 100,
	height: 50,
	borderRadius: 10
});

var buttonLeftText = Ti.UI.createLabel({
	color: "#333",
	font: {fontSize: 16, FontFamily: "Helvetica"},
	textAlign: "center",
	text: "Previous"
});

var buttonRightText = Ti.UI.createLabel({
	color: "#333",
	font: {fontSize: 16, FontFamily: "Helvetica"},
	textAlign: "center",
	text: "Next"
});

var meFile = require('me');

buttonLeftView.add(buttonLeftText);
buttonRightView.add(buttonRightText);
mainWindow.add(messageView);
mainWindow.add(buttonLeftView);
mainWindow.add(buttonRightView);
mainWindow.open();