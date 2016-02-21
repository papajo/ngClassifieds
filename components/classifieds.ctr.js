(function(){
    "use strict";
    
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, classifiedsFactory, $mdSidenav, $mdToast) {
            
             classifiedsFactory.getClassifieds().then(function(classifieds){
                $scope.classifieds = classifieds.data;                                      
        });
        
        var contact = {
            name: "Papa Jo",
            phone: "666-555-444",
            email: "papajo@github.com"
        }
        
        $scope.openSidebar = function() {
            $mdSidenav('left').open();
        }
        $scope.closeSidebar = function() {
            $mdSidenav('left').close();
        }
        $scope.saveClassified = function(classified) {
            if(classified) {
                classified.contact = contact;
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSidebar();
                showToast("Classified Saved!");
            }
        }
        $scope.editClassified = function(classified) {
            $scope.editing = true;
            $scope.openSidebar();
            $scope.classified = classified;    
        }
        $scope.saveEdit = function() {
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSidebar();
            showToast("Edit Saved");
        }
        function showToast(message) {
            $mdToast.show(
                    $mdToast.simple()
                      .content(message)
                      .position('top, right')
                      .hideDelay(3000)
            ); 
        }
    });
    
})();