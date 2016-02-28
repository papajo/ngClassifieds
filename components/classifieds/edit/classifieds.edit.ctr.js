(function(){
    "use strict"
    angular
        .module("ngClassifieds")
        .controller("editClassifiedsCtrl", function($scope, $state, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {
        
        var vm = this;
        vm.closeSidebar = closeSidebar;
        //vm.saveClassified = saveClassified;
        vm.saveEdit = saveEdit;
        vm.classified = $state.params.classified;
        
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
        //function saveClassified(classified) {
        function saveEdit(classified) {
            $scope.$emit('editSaved', 'Edit Saved!')
            vm.sidenavOpen = false;
        }
    });
})();