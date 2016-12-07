//这是一个可爱的入口文件

var express = require("express");	//引入express模块
var path = require('path');
var app = express();				//生成web服务器实例
var port = process.env.PORT || 3000;

var serveStatic = require('serve-static');
app.use(serveStatic('bower_components'));

var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended:false}));


app.set('views', './views/pages');			//设置默认的视图路径
app.set('view engine', 'jade');			//视图引擎设置
// app.use(express.bodyParser());
// app.use(express.static(path.join(_dirname, 'bower_components')));
app.listen(port);						//监听端口

console.log("TJoe started right on " + port);

// app.get('/', function(req, res){	//监听端口的请求
// 	res.render('index', {title : 'TJoe'});
// });


//get参数  路由匹配规则和回调函数
//index
app.get('/', function(req, res){
	res.render('index', {
		title : "TJoe 首页",
		students: [{
			title: '金胖胖',
			_id: 1,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		},{
			title: '金胖胖',
			_id: 2,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		},{
			title: '金胖胖',
			_id: 3,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		},{
			title: '金胖胖',
			_id: 4,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		},{
			title: '金胖胖',
			_id: 5,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		},{
			title: '金胖胖',
			_id: 6,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg'
		}]
	});
});


//detail
app.get('/student/:id', function(req, res){
	res.render('list', {
		title: "TJoe 详情页",
		student: {
			doctor: '金元帅',
			country: '三鲜',
			title: '金胖胖',
			year: 2016,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg',
			language: 'Node.js',
			imgsrc: 'http://www.tjoe18.cn/firPage/pic/35.jpg',
			summary: '当初在2003黄金一代中，韦德是那样的默默无闻，即便是他在新秀年就进入季后赛并且完成绝杀。不过当时还是铺天盖地都是詹姆斯V安东尼的故事，然而几年之后，韦德就成为了联盟最好的球员之一。是金子总会发光的。'
		}
	});
});

//admin
app.get('/admin/student', function(req, res){
	res.render('admin', {
		title: "TJoe 后台页",
		student: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '', 
			img: '',
			summary: '',
			language: ''
		}
	});
});

//list
app.get('/admin/list', function(req, res){
	res.render('detail', {
		title : "TJoe 列表页",
		students: [{
			title: '金胖胖',
			_id: 1,
			doctor: '金元帅',
			country: '三鲜',
			year: 2016,
			poster: 'http://www.tjoe18.cn/firPage/pic/35.jpg',
			language: 'Node.js',
			imgsrc: 'http://www.tjoe18.cn/firPage/pic/35.jpg',
			summary: '当初在2003黄金一代中，韦德是那样的默默无闻，即便是他在新秀年就进入季后赛并且完成绝杀。不过当时还是铺天盖地都是詹姆斯V安东尼的故事，然而几年之后，韦德就成为了联盟最好的球员之一。是金子总会发光的。'
		}]
	});
});