(function() {
	'use strict';

	angular
		.module('app')
        .component('common', {
            templateUrl: 'AngularJS/templates/common.html',
			controller: CommonCtrl,
			controllerAs: 'common'
		});
		
		function CommonCtrl() {
			var common = this;
			common.query = "";
			common.selected = {};
		}
})();