(function() {
    'use strict';
    
	angular
        .module('app')
        .component('contactlist', {
            templateUrl: 'AngularJS/templates/contactlist.html',
			controller: ContactCtrl,
            controllerAs: 'list',
            bindings: {
                query: '=',
                selected: '='
            }
        });
        
        ContactCtrl.$inject = ['contactService'];

		function ContactCtrl(contactService) {
            var list = this;
            list.Name = getByName;
            list.changeFav = changeFavourite;
            
            contactService.getContacts().then(success);

            function success(response) {
                list.contacts = response.data;
            }
            
            function getByName(contact) {
                if (list.query === undefined || list.query == "")
                    return true;
                return contact.Name.includes(list.query);
            }

            function changeFavourite(contactId, isFav) {
                contactService.getContactById(contactId).then(function (response) {
                    var contact;
                    contact = response.data;
                    contact.IsFavourite = isFav;
                    contactService.updateContact(contact);
                });
            }
       }
})();