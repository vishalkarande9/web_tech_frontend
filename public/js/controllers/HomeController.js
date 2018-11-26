(function () {
    angular.module(QuizUp).controller('HomeController', ['$scope', '$rootScope', '$authenticationService', function ($scope, $rootScope, $authenticationService) {

        let homeController = this;

        if ($authenticationService.IsLoggedIn()) {
            homeController.user = $rootScope.currentUser.user;
            console.log(homeController.user);
        }
    }]);
})();