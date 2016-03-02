(function(){
    "use strict"
    angular
        .module("ngClassifieds")
        .controller("editClassifiedsCtrl", function($scope, $state, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {
        
        var vm = this;
        vm.closeSidebar = closeSidebar;
        //vm.saveClassified = saveClassified;
        vm.saveEdit = saveEdit;
        vm.classifieds = classifiedsFactory.ref;
        vm.classified = vm.classifieds.$getRecord($state.params.id);
        
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
            vm.classifieds.$save(vm.classified).then(function() {
                $scope.$emit('editSaved', 'Edit Saved!')
                vm.sidenavOpen = false;
            });
        }
    });
})();