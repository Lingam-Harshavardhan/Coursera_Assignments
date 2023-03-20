(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myCtrl',function($scope){
        $scope.menu="";
        $scope.message="";
        
        
        $scope.display = function(){
            
            const str = $scope.menu; 
            $scope.string = str.split(',');
            var items= 0; 
            items = calculateItems($scope.string);
            if(items==0){
                $scope.message="Please enter data first";
            }
            else if(items<=3){
                $scope.message="Enjoy!";
            }
            else{
                $scope.message="Too much!";
            }
        };
    });
    function calculateItems(str){
        var items=0;
        for(var i=0;i<str.length;i++){
            if(str[i]!=""){
                items++;
            }
        }
        return items;
    }

    
})();
