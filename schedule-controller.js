(function (angular) {
	'use strict';

	angular.module('battlesnake.schedule')
		.controller('scheduleController', scheduleController);

	function scheduleController($scope) {
		$scope.model = {
			selectedItem: null,
			showInfo: null
		};
		$scope.view = {
			canShowViewer: false,
			showViewer: false,
		};
		$scope.methods = {
			openItem: openItem,
			toggleViewer: toggleViewer
		};
		return;

		function openItem(item) {
			if ($scope.view.selectedItem === item) {
				toggleViewer();
				return;
			}
			$scope.model.selectedItem = item;
			return $scope.adapter.showViewer.getDetails(item.itemData)
				.then(function (details) {
					$scope.view.canShow = true;
					$scope.view.showViewer = true;
					$scope.model.showInfo = details;
				});
		}

		function toggleViewer() {
			$scope.view.showViewer = $scope.view.showViewer;
		}
	}

})(window.angular);
