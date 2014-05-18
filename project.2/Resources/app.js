Titanium.UI.setBackgroundColor("#fff");

//elgatha lee

var superFoods = [{title: "Brussels sprouts", description: "They have more glucosinolates (compounds that combat cancer and detoxify our bodies) than any other vegetable."}, 
				{title: "Bok choy", description: "This calcium-rich veggie can protect your bones and may even ward off PMS symptoms."}];
var superFoodsFruits = [{title: "Acai Juice", description: "A glass or two of this anthocyanin-rich berry juice can dramatically boost the amount of antioxidants in your blood, say Texas A&M University researchers."},
				{title: "Apples", description: "They contain quercetin, an antioxidant that may reduce your risk of lung cancer."}]; 


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var titleView = Ti.UI.createView({
	height: 70,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#360",
	height: 4,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "SUPERFOODS RULE!",
	font: {fontSize: 27, fontFamily: "Helvetica"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var ingredients = Ti.UI.createTableView({
	data: superFoods,
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS") {
	ingredients.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var superFoodsSection = Ti.UI.createTableViewSection({
	headerTitle: "SUPERFOODS VEGETABLES",
	footerTitle: "Information On Your Favourite SuperFood"
});

var superFoodsFruitsSection = Ti.UI.createTableViewSection({
	headerTitle: "SUPERFOODS FRUITS",
	footerTitle: "Information On Your Favourite SuperFood Fruit"
});

var superFoodsFile = require('superfoods');

titleView.add(titleLabel);
mainWindow.add(titleView, border, ingredients);
mainWindow.open();