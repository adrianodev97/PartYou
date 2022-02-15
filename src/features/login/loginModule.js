var loginModule = angular.module("loginMod", []);
loginModule.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("");
    $stateProvider
    .state("", {url: "", templateUrl: "", controller: "", controllerAs: ""})
}]);

loginModule.controller("loginCtrl", ["$scope", "$fb", "$state", "$filter", "$util", function($scope, $fb, $state, $filter, $util){
    var $ctrl = this;



    $ctrl.construct = () => {

    };
}]);