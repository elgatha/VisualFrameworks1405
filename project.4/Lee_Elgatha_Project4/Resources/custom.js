/**
* @author  Elgatha Lee
*/

var currentWindow = Ti.UI.currentWindow;

var progressBar = Titanium.UI.createProgressBar({
	top: 50,
	width: 250,
	height: 100,
	min: 0,
	color: "blue",
	message: "That's right, patience is a virtue",
	font: {fontSize: 12, fontWeight:"bold",  fontFamily: "Helvetica"},
	style: Titanium.UI.iPhone.ProgressBarStyle.DEFAULT
});

var startButton = Ti.UI.createButton({
	title: "Begin",
	color: "#000",
	backgroundColor: "red",
	borderWidth: 4,
	borderColor: "#000",
	borderRadius: 35,
	height: 75,
	width: 200,
	bottom: 10
});

var count = 10;

var counter = 0;

var startTimer = function(){
	
	counter = setInterval(startTimer, 1000);
	
	count -= 1;
	
	if (count <= 0){
		clearInterval(counter);
	}
	progressBar.setValue(counter);
};
