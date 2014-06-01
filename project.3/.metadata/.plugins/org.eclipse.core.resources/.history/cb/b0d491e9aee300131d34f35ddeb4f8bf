/**
 * @author Elgatha Lee
 */

var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "my_imgs");

var dirList = imageList.getDirectoryListing();

var numberOfViews = dirList.length;
var numberOfColumns = 4;

var newTop = 20;

var getInfo = function(){
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "#000000",
		title: this.image,
		modal: true
	});

	var fullImage = Ti.UI.createImageView({
		image: this.image,
		borderRadius: 4,
		top: 100,
		width: Ti.Platform.displayCaps.platformWidth
	});
	infoWindow.add(fullImage);
	navWindow.openWindow(infoWindow, {animate: true});
};

var makeViews = function(){
	for (var i = 0, j = numberOfViews; i < j; i++){
		
		var image = Ti.UI.createImageView({
			image: "my_imgs/" + dirList[i],
			borderRadius: 5,
			top: newTop,
			left: 12,
			height: 50,
			width: 60
		});
		
		if ((i%numberOfColumns === 0) && (i !=0)){
			
			image.top = newTop;
		}
		
		viewScrollView.add(image);
		image.addEventListener("click", getInfo);
		subWindowSecond.add(viewScrollView);
		
		}

		navWindow.openWindow(subWindowSecond, {animate: true});

};

myButton.addEventListener("click", makeViews);
subWindow.add(myButton);
navWindow.open();

