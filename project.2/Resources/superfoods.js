/**
 * @author elgatha
 */

var superfoods = [{name: "Eggs", info: "Each egg has 6 grams of protein but just 72 calories."}, 
				{name: "Walnuts", info: "Just 14 walnut halves provide more than twice your daily dose of alpha-linolenic acid, an omega-3 fat that’s been shown to improve memory and coordination."},
				{name: "Tomato sauce", info: "It’s loaded with lycopene, which makes your skin look younger and keeps your heart healthy"}, 
				{name: "Dried Plums", info: "They’re packed with polyphenols, plant chemicals that have been shown to boost bone density by stimulating your bone-building cells."},
				{name: "Brussels sprouts", info: "They have more glucosinolates (compounds that combat cancer and detoxify our bodies) than any other vegetable."}, 
				{name: "Acai Juice", info: "A glass or two of this anthocyanin-rich berry juice can dramatically boost the amount of antioxidants in your blood, say Texas A&M University researchers."},
				{name: "Apples", info: "They contain quercetin, an antioxidant that may reduce your risk of lung cancer."}, 
				{name: "Bok choy", info: "This calcium-rich veggie can protect your bones and may even ward off PMS symptoms."}];

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

var ingredientsSections = [superfoodsListWindow + superfoodsListWindow];

ingredients.setData(ingredientsSections);

