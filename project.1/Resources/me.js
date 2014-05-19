/**
 * @author elgatha
 */
var me = ["Hello! My name is Elgatha Lee", "everyone calls me Apple", "May 10 is my birthday!", "I'm originally from The Bahamas", "A small island known as Nassau", "I'm an Executive Chef", "but I take online classes at Full Sail"];

var i = 0;

var callText;

var displayTextForward = function(){

	var messageView = Ti.UI.createView({
		backgroundColor: "#fff",
		borderColor: "#000",
		height: 240,
		top: 70,
		left: 20,
		right: 20,
		borderRadius: 10
	});

	callText = Ti.UI.createLabel({
		text: me[i],
		font: {fontSize: 16, FontFamily: "Helvetica"},
		textAlign: "center",
	});

	messageView.add(callText);
	mainWindow.add(messageView);

	/*
	Conditional below does not seem to work although your logic looks good.
	
	I recommend instead...
	
	if(i === array.length-1){ //this says if i is the last index in the array
		
	This is also flexible so that if your array content changes, you do not have to change your conditional statements as well.
	 */
	if (callText[i] == "but I take online classes at Full Sail"){
		i = 0;
	} else {
		i++;
	}
};

var displayTextBackward = function(){

	if (callText[i] == "Hello! My name is Elgatha Lee"){ //you could also say if(i === 0) meaning that we are on the first index of the array.
		i = 0; //Since we are moving backwards, you want i to be the last item in your array so i should be i=array.length-1. We subtract one from the length so that we get the correct index number of the array.
	} else {
		i--;
	}

		var messageView = Ti.UI.createView({
		backgroundColor: "#fff",
		borderColor: "#000",
		height: 240,
		top: 70,
		left: 20,
		right: 20,
		borderRadius: 10
	});


	callText = Ti.UI.createLabel({
		text: me[i],
		font: {fontSize: 16, FontFamily: "Helvetica"},
		textAlign: "center",
	});

	messageView.add(callText);
	mainWindow.add(messageView);

};

buttonRightView.addEventListener("click", displayTextForward);
buttonLeftView.addEventListener("click", displayTextBackward);
