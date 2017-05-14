var http=require('http');
function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
		 var json = '';
		 http.get('http://localhost:8080/getJson?', function (res) {
		res.on('data', function (data) {
		json += data;
		}).on('end',function (){
			json = JSON.parse(json);
			resolve(json);
			 })
		}).on('error', function (e) {
    console.error(e);
	});
       
    });  
		return p;
}
var re=runAsync();
module.exports=re;
