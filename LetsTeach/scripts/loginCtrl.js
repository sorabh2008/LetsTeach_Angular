mainApp.controller("loginCtrl", function($scope, $window) {
	$scope.signUp = function() {
		document.forms[0].action = "login.html";
		document.forms[0].submit();
	};
	$scope.login = function() {
		var errorCnt = 0;
		if ($scope.email == null || $scope.email == ""
				|| $scope.email == undefined || $scope.email == "undefined") {
			$scope.emailRequired = true;
			errorCnt++;
		}

		if ($scope.pwd == null || $scope.pwd == "" || $scope.pwd == undefined
				|| $scope.pwd == "undefined") {
			$scope.pwdRequired = true;
			errorCnt++;
		}

		if (errorCnt == 0) {
			$window.sessionStorage.setItem('email', $scope.email);
			document.forms[0].submit();
		}
	};
});