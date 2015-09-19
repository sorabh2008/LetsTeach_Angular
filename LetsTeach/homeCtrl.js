mainApp.controller("homeCtrl",
		function($scope, $window) {
			$scope.email = $window.sessionStorage.getItem('email');

			if ($scope.email == null || $scope.email == undefined
					|| $scope.email == "") {
				window.location.href = "login.html";
			} else {
				var isNGO = $window.sessionStorage.getItem('isNGO');
				if (isNGO == 'true') {
					$scope.isNGO = true;
					window.location.href = "view.html";
				} else {
					$scope.isNGO = false;
					$scope.subjects = [];
				}

			}

			$scope.toggle = function(value) {
				var items = $scope.subjects.toString();
				var index = items.indexOf(value, 0);
				if (index == -1) {
					$scope.subjects.push(value);
				} else {
					$scope.subjects = $scope.subjects.toString().replace(
							value + ",", "").split(",");
				}
			};

			$scope.add = function() {
				$window.sessionStorage.setItem('subjects', $scope.subjects
						.toString());
				window.location.href = "dialog.html";
			};

		});