(function(){
    "use strict";
    
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, classifiedsFactory, $mdSidenav) {
            
             classifiedsFactory.getClassifieds().then(function(classifieds){
                $scope.classifieds = classifieds.data;                                      
        });
        
        $scope.openSidebar = function() {
            $mdSidenav('left').open();
        }
        $scope.closeSidebar = function() {
            $mdSidenav('left').close();
        }
    });
    
})();