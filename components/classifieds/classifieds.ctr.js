(function(){
    "use strict";
    
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, $state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        //declare capture variable vm   
        var vm = this;
        
        vm.categories;
        vm.classified;
        vm.classifieds;
        vm.editing;
        vm.closeSidebar = closeSidebar;
        vm.deleteClassified = deleteClassified;
        vm.editClassified = editClassified;
        vm.openSidebar = openSidebar;
        vm.saveClassified = saveClassified;
        vm.saveEdit = saveEdit;
        
        vm.classifieds = classifiedsFactory.ref; 
        vm.classifieds.$loaded().then(function(classifieds) {
            vm.categories = getCategories(classifieds);
        });
        
        $scope.$on('newClassified', function(event, classified) {
            classified.id = vm.classifieds.length + 1;
            vm.classifieds.push(classified);
            showToast('classified saved!')
        });
        
        $scope.$on('editSaved', function(event, message) {
            showToast(message);
        })
        
        var contact = {
            name: "Papa Jo",
            phone: "666-555-4444",
            email: "papajo@github.com"
        }
                
        function openSidebar() {
            $state.go('classifieds.new');
        }
         function closeSidebar() {
            $mdSidenav('left').close();
        }
        function saveClassified(classified) {
            if(classified) {
                classified.contact = contact;
                vm.classifieds.push(classified);
                vm.classified = {};
                closeSidebar();
                showToast("Classified Saved!");
            }
        }
        function editClassified(classified) {
            $state.go('classifieds.edit', {
                id: classified.$id
            });  
        }
        function saveEdit() {
            vm.editing = false;
            vm.classified = {};
            closeSidebar();
            showToast("Edit Saved");
        }
        function deleteClassified(event, classified) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + classified.title + '?')
                .ok('Yes')
                .cancel('No')
                .targetEvent(event);
                $mdDialog.show(confirm).then(function(){
                vm.classifieds.$remove(classified);
                showToast('Classified deleted!');    
                }, function() {
            });
            
        }
        function showToast(message) {
            $mdToast.show(
            $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
            ); 
        }
        function getCategories(classifieds) {
            var categories = [];
            angular.forEach(classifieds, function(item) {
                angular.forEach(item.categories, function(category) {
                    categories.push(category); 
                });
            });
            return _.uniq(categories);
        }
       
    });
    
})();