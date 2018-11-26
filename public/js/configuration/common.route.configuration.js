(function () {

    angular.module(QuizUp).config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {

        const homeState = {
            name: 'Home',
            url: '/',
            isAuthenticationRequired : false,
            controller: 'HomeController as homeController'
        };

        const accountLoginState = {
            name: 'Login',
            url: 'account/login',
            templateUrl: 'pages/account/login.html',
            isAuthenticationRequired : false,
            controller: 'LoginController as vm'
        };

        const accountRegistrationState = {
            name: 'Registration',
            url: 'account/register',
            templateUrl: 'pages/account/register.html',
            isAuthenticationRequired : false,
            controller: 'RegistrationController as vm'
        };

        const accountProfile = {
            name: 'Profile',
            url: 'account/profile',
            templateUrl: 'pages/account/profile.html',
            isAuthenticationRequired: true,
            controller: 'ProfileController'
        };

        const userHome = {
            name: 'UserHome',
            url: '/home',
            templateUrl: 'pages/user/home.html',
            isAuthenticationRequired: false,
            controller: 'UserHomeController as vm'
        };


        const userSection = {
            name: 'Section',
            url: '/home/section',
            templateUrl: 'pages/user/section.html',
            isAuthenticationRequired: false,
            controller: 'SectionController as vm',
            params: {
                paramOne: "defaultValueOne" ,
                paramTwo: "defaultValueTwo"
            }
        };

        const userQuestions = {
            name: 'QuizQuestions',
            url: '/home/question',
            templateUrl: 'pages/user/question.html',
            isAuthenticationRequired: false,
            controller: 'QuizQuestionsController as vm',
            params: {
                paramOne: "defaultValueOne" ,
                paramTwo: "defaultValueTwo"
            }
        };


        $stateProvider.state(homeState);

        $stateProvider.state(accountRegistrationState);

        $stateProvider.state(accountLoginState);

        $stateProvider.state(accountProfile);

        $stateProvider.state(userHome);

        $stateProvider.state(userSection);

        $stateProvider.state(userQuestions);

    }]);

})();