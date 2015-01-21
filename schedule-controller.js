(function (angular) {
	'use strict';

	angular.module('battlesnake.schedule')
		.controller('scheduleController', scheduleController);

	function scheduleController($scope) {
		$scope.model = {
			details: null,
		};

		$scope.methods = {
			openItem: openItem,
			toggleViewer: toggleViewer
		};

		$scope.$watch('selectedItem', selectionChanged);
		return;

		function selectionChanged() {
			openItem($scope.selectedItem, true);
		}

		function openItem(item, forceOpen) {
			if ($scope.selectedItem === item && !forceOpen) {
				toggleViewer();
				return;
			}
			$scope.selectedItem = item;
			if (!item) {
				return;
			}
			return $scope.adapter.showViewer.getDetails(item)
				.then(function (details) {
					$scope.expanded = true;
					$scope.model.details = details;
				});
		}

		function toggleViewer() {
			$scope.model.isOpen = !$scope.model.isOpen;
		}
	}

})(window.angular);
