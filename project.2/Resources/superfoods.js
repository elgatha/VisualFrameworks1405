/**
 * @author elgatha
 */

var superFoods = [{title: "Brussels sprouts", description: "They have more glucosinolates (compounds that combat cancer and detoxify our bodies) than any other vegetable."}, 
				{title: "Bok choy", description: "This calcium-rich veggie can protect your bones and may even ward off PMS symptoms."}];
var superFoodsFruits = [{title: "Acai Juice", description: "A glass or two of this anthocyanin-rich berry juice can dramatically boost the amount of antioxidants in your blood, say Texas A&M University researchers."},
				{title: "Apples", description: "They contain quercetin, an antioxidant that may reduce your risk of lung cancer."}]; 


var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	var detailTitleView = Ti.UI.createView({
		height: 70,
		backgroundColor: "#fff", 
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#690",
		height: 4,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 35, fontFamily: "Helvetica"},
		top:25,
		width: "100%",
		textAlign: "center"
	});	
	
	var detailText = Ti.UI.createLabel({
		text: this.info,
		font: {fontSize: 25, fontFamily: "Helvetica"},
		top: detailBorder.height + detailBorder.top + 40,
		top: 100,
		right: 35,
		left: 35,
		textAlign: "center"
	});
	
	var endButton = Ti.UI.createLabel({
		text: "DONE",
		backgroundColor: "#360",
		color: "#FCO",
		height: 50,
		font: {fontSize: 30, fontFamily: "Helvetica"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	
	var closeWindow = function(){
		detailWindow.close();
	};
	
	endButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, endButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
	
	detailWindow.open();
	 
};

for(var i=0, j=superFoods.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: superFoods[i].title,
		info: superFoods[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS") {
	theRow.hasChild = false;
	theRow.hasDetail = true;
	}
	
	superFoodsSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}


for(var i=0, j=superFoodsFruits.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: superFoodsFruits[i].title,
		info: superFoodsFruits[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS") {
	theRow.hasChild = false;
	theRow.hasDetail = true;
	}
	
	superFoodsFruitsSection.add(theRow);
	theRow.addEventListener("click", getDetail);
} 
var ingredientsSection = [superFoodsSection, superFoodsFruitsSection];
ingredients.setData(ingredientsSection);
