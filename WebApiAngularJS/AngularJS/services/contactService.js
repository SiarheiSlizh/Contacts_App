(function() {
    'use strict';

    angular
        .module('app')
        .factory('contactService', contactService);

        contactService.$inject = ['$http'];

        function contactService($http) {
            var service = {};
            var urlBase = 'http://localhost:58250/api';

            service.getContacts = getContacts;
            service.getFavouriteContacts = getFavouriteContacts;
            service.getContactById = getContactById;
            service.updateContact = updateContact;
            service.removeContacts = removeContacts;

            function getContacts() {
                return $http.get(urlBase + '/Contact');
            }

            function getFavouriteContacts() {
                return $http.get(urlBase + '/Contact/favourites');
            }

            function getContactById(id) {
                return $http.get(urlBase + '/Contact/' + id);
            }

            function updateContact(contact) {
                if (contact.Id === undefined) { //create new
                    $http.post(urlBase + '/Contact', contact);
                } else {
                    $http.put(urlBase + '/Contact/' + contact.Id, contact);
                }
            }

            function removeContacts(selected) {
                for (var val in selected) {
                    $http.delete(urlBase + '/Contact/' + val);
                }
            }

            return service;
        }
})();