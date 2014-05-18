//elgatha lee


var mainWindow = Ti.UI.createWindow();

var navWindow = Ti.UI.createWindow({
	title: "islands",
	model: true,
	backgroundColor: "#333"
});
	
var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: navWindow
});

var table = Ti.UI.createTableView({
	style.Ti.UI. iPhone.TableViewStyle.GROUPED
});

var superfoodsWindow = Ti.UI.createTableViewSection({
	headerTitle: "SuperFoods",
	footerTitle: "A Few Of My Favourite SuperFoods"
});

var superfoodsListWindow = Ti.UI.createTableViewSection({
	headerTitle: "SuperFoods",
	footerTitle: "A Few Of My Favourite SuperFoods"
});

