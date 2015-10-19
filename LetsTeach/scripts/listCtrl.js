mainApp.controller("listCtrl", function($scope, $window) {
	
	$scope.list_0 = false;
	$scope.list_1 = false;
	$scope.list_2 = false;
	
	$scope.accept = function(value) {
		$scope["list_" + value] = true;
	};

});