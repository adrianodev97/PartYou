app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state("", {
        url: "",
        templateUrl: "",
        redirectTo: "",
        controllerAs: "$ctrl"
    })
    $stateProvider
    .state("", {
        url: "",
        templateUrl: "",
        redirectTo: "",
        controllerAs: "$ctrl",
    })
    
}]);