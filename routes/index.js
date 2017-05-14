var express = require('express');
var router = express.Router();
var data=require('../serve/data.js');
var encoding =require('encoding');
/* GET home page. */
router.get('/', function(req, res, next) {
	//var a=JSON.parse(getdata);
	data.then(function(data){
		var re=new Array;
		for(i=0;i<4;i++){
			re[i]=data.rows[i].title;
		}
		res.render('index',{title:re});
		
	});
	

});

module.exports = router;
