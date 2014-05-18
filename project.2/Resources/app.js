Titanium.UI.setBackgroundColor("#fff");

//elgatha lee

var superfoods = [{title: "Eggs"}, {title: "Walnuts"}, {title: "Tomato Sauce"}, {title: "Dried Plums"}, {title: "Brussels Sprouts"}, {title: "Acai Juice"}, {title: "Apples"}, {title: "Bok Choy"},];

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#ccc"
});

var titleView = Ti.UI.createView({
	height: 70,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "SuperFoods Rule",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var ingredients = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iphone OS") {
	ingredients.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var superfoodsSection = Ti.UI.createTableViewSection({
	headerTitle: "SUPERFOODS",
	footerTitle: "SuperFoods To Make You SUPER!"
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#ccc"
	});
	
var detailTitleView = Ti.UI.createView({
	height: 70,
	backgroundColor: "#fff",
	top: 0
});

var detailTitleBorder = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: detailTitleView.height + detailTitleView.top
});

var detailTitleLabel = Ti.UI.createLabel({
	text: this.title,
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView.detailTitleBorder);
};

for(var i=0, j=superfoods.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: superfoods[i].title,
		hasChild:true,
	});
	
	if(Ti.Platform.name === "iphone OS") {
		theRow.hasChild = false;
		theRow.hasDetail = true;
	}
	
	superfoodsSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

var ingredientsSections = [superfoodsSection];

ingredients.setData(ingredientsSections);

titleView.add(titleLabel);
mainWindow.add(titleView, border, ingredients);
mainWindow.open();
