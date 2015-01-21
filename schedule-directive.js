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
				nowPlaying: '=',
				timelineClass: '@',
				showViewerClass: '@',
				expanded: '=?',
				selectedItem: '=?'
			},
			templateUrl: 'schedule-template.html',
			controller: 'scheduleController'
		};
	}

})(window.angular);
