/**
 * Created by dave on 2/9/2016.
 */
(function(angular){
    angular.module('app').controller('controller',function(){
        var main = this;
        main.someText = 'display this text';
    });
})(window.angular);