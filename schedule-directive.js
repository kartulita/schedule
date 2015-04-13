(function (angular) {
	'use strict';

	angular.module('battlesnake.schedule')
		.directive('schedule', scheduleDirective);

	function scheduleDirective() {
		return {
			restrict: 'A',
			require: 'schedule',
			scope: {
				adapter: '=schedule',
				nowPlayingClass: '@',
				timelineClass: '@',
				showViewerClass: '@',
				expanded: '=?',
				selectedItem: '=?',
				fullWidth: '@'
			},
			templateUrl: 'schedule-template.html',
			controller: 'scheduleController'
		};
	}

})(window.angular);
