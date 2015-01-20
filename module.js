(function (angular) {
	'use strict';

	/**
	 * @ngdoc module
	 * @name schedule
	 * @requires timeline
	 * @requires show-viewer
	 *
	 * @description
	 * Combines timeline and show-viewer widgets
	 */
	angular.module('battlesnake.schedule', ['battlesnake.timeline', 'battlesnake.show-viewer']);

})(window.angular);
