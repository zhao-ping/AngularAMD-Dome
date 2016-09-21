//当前版本号
var version = Math.random();

//require配置
require.config({
    baseUrl: "app/",
    map: {
        '*': {
           'css': 'css/css.min'
        }
    },
	// alias libraries paths
    paths: {
        'angular': 'js/angular.min',
        "angular-route": "js/angular-route",
        'angularAMD': 'js/angularAMD.min',
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
         'angularAMD' : ['angular'],
         'angular-route' : ['angular']
    },

    // kick start application
    deps: ['app'],
    urlArgs: version
});

