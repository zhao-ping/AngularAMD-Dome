/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG ，Feel
*/

define(["angularAMD","angular-route"], function (angularAMD) {
    var app = angular.module("app", ["ngRoute"]);
    
    //APP路由配置
    app.config(["$routeProvider",function (a) {
        a.when("/home", angularAMD.route({
            templateUrl: 'views/index.html',
            controller: 'indexCtrl',
            controllerUrl: 'controller/indexCtrl'
        }))
        .otherwise({redirectTo:"/home"})
    }]);
    return angularAMD.bootstrap(app);
});
