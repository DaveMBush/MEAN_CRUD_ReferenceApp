/**
 * Created by dave on 2/9/2016.
 */
(function(angular){
    angular.module('app')
        .config(['$stateProvider','$urlRouterProvider','$locationProvider',config]);
    function config($stateProvider,$urlRouterProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main',{
            url: '/',
            templateUrl: 'app/view/template.html',
            controller: 'view.controller as view'
        }).state('edit',{
            url: '/edit/:id',
            templateUrl: 'app/edit/template.html',
            controller: 'edit.controller as edit'
        })
    }
})(window.angular);