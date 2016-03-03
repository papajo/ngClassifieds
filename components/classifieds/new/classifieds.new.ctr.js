(function(){
    "use strict"
    angular
        .module("ngClassifieds")
        .controller("newClassifiedsCtrl", function($scope, $state, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {
        
        var vm = this;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
        
        $timeout(function() {
            this.$mdSidenav('left').open();    
        });
        
        $scope.$watch('vm.sidenavOpen', function(sidenav) {
            console.log('test');
            if(sidenav == false) {
                $mdSidenav('left')
                .close()
                .then(function() {
                    $state.go('classifieds');
                })
             }
        });
        function closeSidebar() {
            vm.sidenavOpen = false;
        }
        function saveClassified(classified) {
            if(classified) {
                classified.contact = {
                    name: "Papa Jo",
                    phone: "666-555-4444",
                    email: "papajo@github.com"
                }
                $scope.$emit('newClassified', classified);
                vm.sidenavOpen = false;
            }
        }
    });
})();