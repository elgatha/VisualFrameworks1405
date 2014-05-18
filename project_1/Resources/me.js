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

	if (callText[i] == "but I take online classes at Full Sail"){
		i = 0;
	} else {
		i++;
	}
};

var displayTextBackward = function(){

	if (callText[i] == "Hello! My name is Elgatha Lee"){
		i = 0;
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
