(function(){
    "use strict"
    angular
        .module("ngClassifieds")
        .controller("newClassifiedsCtrl", function($scope, $state, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {
        
        var vm = this;
        vm.closeSidebar = closeSidebar;
        
        $timeout(function() {
            this.$mdSidenav('left').open();    
        });
        
        $scope.$watch('vm.sidenavOpen', function(sidenav) {
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
    });
})();