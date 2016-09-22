define(['app'], function (app) {
	 app.service('verify',function (){
	 	//验证手机号码
	 	this.tel = function(x){
	 		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	 		if(!myreg.test(x)){ 
			    return false; 
			} 
			return true;
	 	}
	 	
	 })
})