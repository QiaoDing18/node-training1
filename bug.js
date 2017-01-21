var http = require("https");
var url = "https://www.xiyoulinux.org/";
var cheerio = require("cheerio");


function analyseHTML(html){
	var $ = cheerio.load(html);
	var news = $(".featurette");

	var xuptmobileData = [];
	news.each(function(item){
		var iNews = $(this);
		var newsTitle = iNews.find(".featurette-heading").text();
		var newsContent = iNews.find(".lead").text().substring(0,30) + "...";
		var NewsData = {
			newsTitle : newsTitle,
			newsContent : newsContent,
		};
		xuptmobileData.push(NewsData);
	});
	return xuptmobileData;
}

function printxuptmobileInf(xuptmobileData){
	xuptmobileData.forEach(function(item){
		var newsTitle = item.newsTitle;
		var newsContent = item.newsContent;
		console.log("\n\n  标题  ：【" + newsTitle + "】\n");
		console.log("大概内容：" + newsContent + "\n");
	});
}

http.get(url, function(res){
	var html = "";

	res.on("data", function(data){
		html += data;
	});

	res.on("end", function(){
		var xuptmobileData = analyseHTML(html);
		console.log("\n             linux官网爬的数据\n");
		printxuptmobileInf(xuptmobileData);
	});
}).on("error", function(){
	console.log("获取失败");
});
