define(['app','service/verify'], function (app) {//引入app.js和service/verify.js  注意路径，main.js中定义的跟路径是app/
	app.controller('indexCtrl',["$scope",'verify', function (a,verify) {
		
		
		//加载数据
		alert('index');
	
		
		
	}])
})