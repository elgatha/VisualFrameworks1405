/**
* @author  Elgatha Lee
*/

var currentWindow = Ti.UI.currentWindow;

var imageList = Ti.Filesystem.getFile(To.Filesystem.resourcesDirectory, "my_imgs");
var dirList = imageList.getDirectoryListing();

var numberOfImages = dirList.length;

var counter, random = 0;

var buttonView = Ti.UI.createView({
	backgroundColor: "yellow",	
	borderRadius: 5,
	height: 100,
	bottom: 10,
	left: 20,
	right: 20
});

var buttonLabel = Ti.UI. createLabel({
	text: "Click",
	font: {fontSize: 25, fontFamily: "Helvetica"},
	color: "#000",
	center: 0
});

var randomImage = function(){
	random = Math.floor((Math.random()*numberOfImages)+1);
	
	if (random == counter){
	 	random = Math.floor((Math.random()*numberOfImages)+1);
	}

var image = Ti.UI.createImageView({
	image: "my_imgs/" + dirList[random],
	borderRadius: 5,
	top: Ti.Platform.displayCaps.platformHeight /6,
	width: Ti.platform.displayCaps.platformWidth
});

currentWindow.add(image);
counter = random;
};

buttonVIew.addEventListener("click", randomImage);
buttonVIew.add(buttonLabel);
currentWindow.add(buttonView);
