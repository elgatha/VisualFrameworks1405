//elgatha lee


var superfoods = [{name: "Eggs", info: "Each egg has 6 grams of protein but just 72 calories."}, 
				{name: "Walnuts", info: "Just 14 walnut halves provide more than twice your daily dose of alpha-linolenic acid, an omega-3 fat that’s been shown to improve memory and coordination."},
				{name: "Tomato sauce", info: "It’s loaded with lycopene, which makes your skin look younger and keeps your heart healthy"}, 
				{name: "Dried Plums", info: "They’re packed with polyphenols, plant chemicals that have been shown to boost bone density by stimulating your bone-building cells."},
				{name: "Brussels sprouts", info: "They have more glucosinolates (compounds that combat cancer and detoxify our bodies) than any other vegetable."}, 
				{name: "Acai juice", info: "A glass or two of this anthocyanin-rich berry juice can dramatically boost the amount of antioxidants in your blood, say Texas A&M University researchers."},
				{name: "Apples", info: "They contain quercetin, an antioxidant that may reduce your risk of lung cancer."}, 
				{name: "Bok choy", info: "This calcium-rich veggie can protect your bones and may even ward off PMS symptoms."}.
				{name: "Steel-cut oats", info: "Because they’re less processed than traditional oats, they’re digested more slowly—keeping you full all morning long."}, 
				{name: "Salmon", info: "You’ll get all the heart-smart omega-3s you need in a day from just 3 oz."},
				{name: "Avocados", info: "Their healthy fat keeps you satisfied and helps you absorb other nutrients. For a new u twist, brush a halved avocado (pit removed) with olive oil and grill 1 minute. "}];

var info - function(){
	var infoWindow + Ti.UI.createWindow({
		backgroundColor: "#999",
		title: this.title
		model: true
	});

	var infoText = Ti.UI.createLabel({
		text.this.info,
		color: "#fff",
		font: {fontSize: , fontFamily: "Helvetica"}
	});

	infoWindow.add(infoText);
	navgroup.openWindow(infoWindow, {animate: true});

};

for (var i = 0, j = superfoods.length; i < j; i ==){
	var rows = Ti.UI.createTableViewRow({
		title: superfoods[i].none,
		info: superfoods[i].info,
		hasChild: true

	});

if (i < 4) {
	superfoodsListWindow.add(rows);
	rows.addEventListener("click", info);

	} else { 
		superfoodsListWindow.add(rows);
		rows.addEventListener("click", info);
	}
}

var sections = [superfoodsListWindow + superfoodsListWindow];
