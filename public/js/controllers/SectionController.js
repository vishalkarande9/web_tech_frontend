(function () {
    angular.module(QuizUp).controller('SectionController', ['$scope', '$api', '$http', '$userService', '$state', '$stateParams', function ($scope, $api, $http, $userService, $state, $stateParams) {

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


        $scope.paramOne = $stateParams.paramOne;
        $scope.paramTwo = $stateParams.paramTwo;

        vm.course_title= $scope.paramOne;
        vm.sectionCards = $scope.paramTwo;


        vm.getQuestions = function (section_title,difficulty_level) {
            //get question
            vm.question=[{
                section_details: {
                    section_id: "5bf73f6271d14105ccccbd68",
                    section_title: "title1"
                },
                course_details: {
                    course_id: "5bf73eaf71d14105ccccbd66",
                    course_title: "abc"
                },
                _id: "5bf740ae71d14105ccccbd69",
                question: "question1",
                option: [
                    {
                        _id: "5bf740ae71d14105ccccbd6d",
                        option_number: 1,
                        option_value: "option1q1",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6c",
                        option_number: 2,
                        option_value: "option2q1",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6b",
                        option_number: 3,
                        option_value: "option3q1",
                        answer: true
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6a",
                        option_number: 4,
                        option_value: "option4q1",
                        answer: false
                    }
                ],
                difficulty_level: 0
            },{
                section_details: {
                    section_id: "5bf73f6271d14105ccccbd68",
                    section_title: "title1"
                },
                course_details: {
                    course_id: "5bf73eaf71d14105ccccbd66",
                    course_title: "abc"
                },
                _id: "5bf740ae71d14105ccccbd69",
                question: "question2",
                option: [
                    {
                        _id: "5bf740ae71d14105ccccbd21",
                        option_number: 1,
                        option_value: "option1q2",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd22",
                        option_number: 2,
                        option_value: "option2q2",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd23",
                        option_number: 3,
                        option_value: "option3q2",
                        answer: true
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd24",
                        option_number: 4,
                        option_value: "option4q2",
                        answer: false
                    }
                ],
                difficulty_level: 0
            },{
                section_details: {
                    section_id: "5bf73f6271d14105ccccbd68",
                    section_title: "title1"
                },
                course_details: {
                    course_id: "5bf73eaf71d14105ccccbd66",
                    course_title: "abc"
                },
                _id: "5bf740ae71d14105ccccbd69",
                question: "question3",
                option: [
                    {
                        _id: "5bf740ae71d14105ccccbd6d31",
                        option_number: 1,
                        option_value: "option1q3",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6c32",
                        option_number: 2,
                        option_value: "option2q3",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6b33",
                        option_number: 3,
                        option_value: "option3q3",
                        answer: true
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6a34",
                        option_number: 4,
                        option_value: "option4q3",
                        answer: false
                    }
                ],
                difficulty_level: 0
            },{
                section_details: {
                    section_id: "5bf73f6271d14105ccccbd68",
                    section_title: "title1"
                },
                course_details: {
                    course_id: "5bf73eaf71d14105ccccbd66",
                    course_title: "abc"
                },
                _id: "5bf740ae71d14105ccccbd69",
                question: "question4",
                option: [
                    {
                        _id: "5bf740ae71d14105ccccbd6d41",
                        option_number: 1,
                        option_value: "option1q4",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6c42",
                        option_number: 2,
                        option_value: "option2q4",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6b43",
                        option_number: 3,
                        option_value: "option3q4",
                        answer: true
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6a44",
                        option_number: 4,
                        option_value: "option4q4",
                        answer: false
                    }
                ],
                difficulty_level: 0
            },{
                section_details: {
                    section_id: "5bf73f6271d14105ccccbd68",
                    section_title: "title1"
                },
                course_details: {
                    course_id: "5bf73eaf71d14105ccccbd66",
                    course_title: "abc"
                },
                _id: "5bf740ae71d14105ccccbd69",
                question: "question5",
                option: [
                    {
                        _id: "5bf740ae71d14105ccccbd6d51",
                        option_number: 1,
                        option_value: "option1q5",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6c52",
                        option_number: 2,
                        option_value: "option2q5",
                        answer: false
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6b53",
                        option_number: 3,
                        option_value: "option3q5",
                        answer: true
                    },
                    {
                        _id: "5bf740ae71d14105ccccbd6a54",
                        option_number: 4,
                        option_value: "option4q5",
                        answer: false
                    }
                ],
                difficulty_level: 0
            }]

            $state.go("QuizQuestions",{
                user_id: 1,
                paramOne: section_title ,
                paramTwo: vm.question
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