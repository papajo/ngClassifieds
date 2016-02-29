(function() {
    "use strict"
    
    angular
        .module("ngClassifieds")
        .factory("classifiedsFactory", function($http, $firebaseArray) {
            
            var ref = new Firebase('https://ngr-classifieds.firebaseio.com');
            return {
                ref: $firebaseArray(ref)
            }
        });
})();