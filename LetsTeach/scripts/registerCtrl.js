mainApp.controller("registerCtrl", function($scope, $window) {
	$scope.register = function() {
		var errorCnt = 0;
		if ($scope.email == null || $scope.email == ""
				|| $scope.email == undefined || $scope.email == "undefined") {
			$scope.emailRequired = true;
			errorCnt++;
		} else {
			$scope.emailRequired = false;
		}

		if ($scope.name == null || $scope.name == ""
				|| $scope.name == undefined || $scope.name == "undefined") {
			$scope.nameRequired = true;
			errorCnt++;
		} else {
			$scope.nameRequired = false;
		}

		if ($scope.mobile == null || $scope.mobile == ""
				|| $scope.mobile == undefined || $scope.mobile == "undefined") {
			$scope.mobileRequired = true;
			errorCnt++;
		} else {
			$scope.mobileRequired = false;
		}

		if (errorCnt == 0) {
			$window.sessionStorage.setItem('email', $scope.email);
			document.forms[0].submit();
			if ($scope.isNGO) {
				$window.sessionStorage.setItem('isNGO', true);
			} else {
				$window.sessionStorage.setItem('isNGO', false);
			}
		}
	};
});