//Elgatha Lee
//VFW 1405
//Project 4

var win = Ti.UI.createWindow();

var navWindow = Ti.UI.createWindow({
	title: "Project 4 1405 Visual Frameworks",
	backgroundColor: "#ccc",
	modal: true,
	layout: "horizontal"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWindow
});

var galleryView = Ti.UI.createView({
	backgroundColor: "blue",
	borderRadius: 5,
	height: 100,
	top: 10,
	left: 10,
	right: 10,
});

var galleryLabel = Ti.UI.createLabel({
	text: "The Family"
	font: {fontSize: 25, fontFamily: "helvetica"},
	color: "#000",
	left: 20
});

var infoView = Ti.UI.createView({
	backgroundColor: "yellow",
	borderRadius: 5,
	height: 100,
	top: 10,
	left: 10,
	right: 10
});

var infoLabel = Ti.UI.createLabel({
	text: "Family Info",
	font: {fontSize: 25, fontFamily: "helvetica"},
	color: "#000",
	left: 20
});

var customView = Ti.UI.createView({
	backgroundColor: " blue",
	borderRadius: 5,
	height: 100,
	top: 10,
	left: 10,
	right: 10
});

var customLabel = Ti.UI.createLabel({
	text: "Custom",
	font: {fontSize: 25, fontFamily: "Helvetica"},
	color: "#000",
	left: 20
});

var myInfoView = Ti.UI.createView({
	backgroundColor: "black",
	borderRadius: 5,
	height: 100,
	top: 10,
	left: 10,
	right: 10
});






var imgsFile = require('imgs');
var infoFile = require('info');
var customFile = require('custom');



buttonView.addEventListener("click", randomImage);
buttonView.add(buttonLabel);
navWin.add(buttonView);
navWin.open();

navWindow.navGroup = navGroup;
galleryView.add(spacer, galleryLabel);
infoView.add(spacer, infoLabel);
customView.add(customLabel);
navwindow.add(container, nameLabel);
win.add(navGroup);
