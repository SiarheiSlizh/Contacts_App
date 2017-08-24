(function(){
	'use strict';

    angular
        .module('app')
        .component('contactedit', {
            templateUrl: 'AngularJS/templates/edit.html',
	        controller: ContactEditCtrl,
	        controllerAs: 'edit'
	    });

		ContactEditCtrl.$inject = ['contactService', '$routeParams', '$location'];

	    function ContactEditCtrl(contactService, $routeParams, $location) {
	        var edit = this;
			edit.cancel = cancel;
			edit.save = save;
			edit.isValid = true;
			edit.relationships = ['Home', 'Work', 'Others'];

			if ($routeParams.contactId != undefined) {
			    contactService.getContactById($routeParams.contactId).then(success);
			}

			function success(response) {
			    edit.contact = response.data;
			}

			function cancel() {
				$location.path('/data');
			}
			
			function save() {
				if (edit.isValid) {
					contactService.updateContact(edit.contact);
					$location.path('/data');
				} else {
					alert('Please, enter correct data.');
				}
			}
	    }
})();
