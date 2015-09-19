mainApp.controller("viewCtrl", function($scope, $window) {
	$scope.teach = function() {
		var errorCnt = 0;
		if ($scope.subject == 0 || $scope.subject == undefined) {
			$scope.subRequired = true;
			errorCnt++;
		} else {
			$scope.subRequired = false;
		}

		if ($scope.date == null || $scope.date == ""
				|| $scope.date == undefined) {
			$scope.dateRequired = true;
			$scope.dateErrMsg = "Date is required.";
			errorCnt++;
		} else {
			var currDate = new Date();
			if ($scope.date < currDate) {
				$scope.dateErrMsg = "Cannot be future date.";
				$scope.dateRequired = true;
				errorCnt++;
			} else {
				$scope.dateErrMsg = "";
				$scope.dateRequired = false;
			}
		}

		if ($scope.location == 0 || $scope.location == undefined) {
			$scope.locRequired = true;
			errorCnt++;
		} else {
			$scope.locRequired = false;
		}

		if (errorCnt == 0) {
			window.location.href = "dialog.html";
		}
	};
});