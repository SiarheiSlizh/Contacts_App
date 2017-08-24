(function() {
    'use strict';

    angular
        .module('app')
        .component('search', {
            templateUrl: 'AngularJS/templates/search.html',
            controller: SearchCtrl,
            controllerAs: 'search',
            bindings: {
                query: '='
            }
        });

        function SearchCtrl() {
            var search = this;
        }
})();