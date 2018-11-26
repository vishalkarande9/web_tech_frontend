(function () {
    angular.module(QuizUp).controller('QuizQuestionsController', ['$scope', '$api', '$http', '$userService', '$state', '$stateParams', function ($scope, $api, $http, $userService, $state, $stateParams) {

        let vm = this;

        vm.OnSubmitAnswer = function (questionArr) {
            let finalArr=[];
            $(document).ready(function(){

                    var check = true;
                    $("input:radio").each(function(){
                        var name = $(this).attr("name");
                        if($("input:radio[name="+name+"]:checked").length == 0){
                            check = false;
                        }
                    });

                    if(check){
                        alert('One radio in each group is checked.');

                        for(let i=0;i<questionArr.length;i++){
                            let value;
                            let optionName = questionArr[i].question;
                            console.log(optionName);
                            value = $('input[name='+optionName+']:checked').val();
                            finalArr.push({
                                question_id:questionArr[i]._id,
                                answer:value
                            })
                        }

                        console.log("finalArr :",finalArr);

                    }else{
                        alert('Please select one option in each question.');
                    }

            });

        }




        $scope.paramOne = $stateParams.paramOne;
        $scope.paramTwo = $stateParams.paramTwo;

        vm.section_title= $scope.paramOne;
        vm.question = $scope.paramTwo;







    }]);
})();