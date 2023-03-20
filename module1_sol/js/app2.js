(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myCtrl',function($scope){
        $scope.menu = ""; // initialize menu variable

// Watch for changes to the menu variable
$scope.$watch('menu', function(newValue, oldValue) {
    if (newValue !== oldValue) { // check if the value has changed
        // Call the display function to update the message
        $scope.display();
    }
});

// Function to calculate the number of items
$scope.calculateItems = function(menu) {
    var items = 0;
    if (menu) {
        items = menu.split(',').filter(function(item) {
            return item.trim() !== ''; // ignore empty items
        }).length;
    }
    return items;
};

// Function to display the message based on the number of items
$scope.display = function() {
    var items = $scope.calculateItems($scope.menu);
    if (items === 0) {
        $scope.message = "Please enter data first";
    } else if (items <= 3) {
        $scope.message = "Enjoy!";
    } else {
        $scope.message = "Too much!";
    }
};

    });
    
})();