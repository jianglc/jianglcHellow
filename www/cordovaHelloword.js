/**
 * cordova plugin
 * Copyright (c) ljx
 *
 */
 (function(cordova){
    var cordovaHelloword = function() {

    };  

    cordovaHelloword.prototype.startConlose = function (success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'CordovaAlter', 'startConlose', []);
    };


    cordovaHelloword.prototype.startActivity = function (params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'cordovaHelloword', 'startActivity', [params]);
    };
 
    window.cordovaAlter = new cordovaHelloword();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.cordovaAlter = window.cordovaAlter;
})(window.PhoneGap || window.Cordova || window.cordova);
