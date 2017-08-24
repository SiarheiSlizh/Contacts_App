(function() {
    'use strict';

    angular
        .module('app')
        .component('tablebuttons', {
            templateUrl: 'AngularJS/templates/table-buttons.html',
            controller: TableButtonsCtrl,
            controllerAs: 'tb',
            bindings: {
                selected:'='
            }
        });

        TableButtonsCtrl.$inject = ['contactService', '$location'];

        function TableButtonsCtrl(contactService, $location) {
            var tb = this;

            tb.remove = removeContacts;

            function removeContacts() {
                contactService.removeContacts(tb.selected);
                tb.selected = {};
                $location.path("/");
            }
        }
})();