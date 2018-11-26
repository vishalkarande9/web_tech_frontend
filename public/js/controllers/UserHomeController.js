(function () {
    angular.module(QuizUp).controller('UserHomeController', ['$scope', '$api', '$http', '$userService', '$state', function ($scope, $api, $http, $userService, $state) {

        let vm = this;

        vm.populateCards = function () {

            vm.cards=[{
                course_title:"maths",
                course_description:"description 1"
            },{
                course_title:"science",
                course_description:"description 2"
            },{
                course_title:"history",
                course_description:"description 3"
            },{
                course_title:"physics",
                course_description:"description 4"
            },{
                course_title:"geog",
                course_description:"description 5"
            },{
                course_title:"civics",
                course_description:"description 6"
            }];
          //  console.log(vm.cards.length)
        }

        vm.populateCards()

        vm.goToSection = function (course_title,course_description) {
            // get
            vm.sectionCards=[{
                section_title:"maths",
                section_description:"description 1"
            },{
                section_title:"science",
                section_description:"description 2"
            },{
                section_title:"history",
                section_description:"description 3"
            },{
                section_title:"physics",
                section_description:"description 4"
            },{
                section_title:"geog",
                section_description:"description 5"
            },{
                section_title:"civics",
                section_description:"description 6"
            }];
            $state.go("Section",{
                user_id: 1,
                paramOne: course_title ,
                paramTwo: vm.sectionCards
            });

        }





        /*

        vm.alerts = [];

        vm.addAlert = function (message, type) {
            vm.alerts.push({message: message, type: type});
        };

        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };

        vm.register = function () {
            $http.post($api.base + $api.account.register, vm.registration).then(function (result) {
                if (result.status === 201) {
                    vm.addAlert("Registration Successful","success");
                    $state.go("Login");
                }else{
                    vm.addAlert("\"Registration Failed. Please Try Again!\"","danger");
                }
            }, function (error) {
                vm.addAlert("Registration Failed. Please Try Again!");
            });
        };

        vm.registration = {};

        vm.registrationFields = [
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Username',
                    placeholder: 'Enter Your Username',
                    required: true
                }
            },
            {
                key: 'profile.first_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'First Name',
                    placeholder: 'Enter Your First Name',
                    required: true
                }
            },
            {
                key: 'profile.last_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Last Name',
                    placeholder: 'Enter Your Last Name',
                    required: true
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Enter Your Password',
                    required: true
                }
            },
            {
                key: 'confirm_password',
                type: 'input',
                optionsTypes: [
                    "matchField"
                ],
                model: {},
                templateOptions: {
                    type: 'password',
                    label: 'Confirm Password',
                    placeholder: 'Enter Your Password Again',
                    required: true
                },
                data: {
                    fieldToMatch: "password",
                    modelToMatch: vm.registration
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Enter Your Email Address',
                    required: true
                }
            },
        ];
        */
    }]);
})();