angular.module('wacanaModule', [])
	.controller('wacanaController', ['$scope', '$http', 'Wacana', function($scope, $http, Wacana) {
		$scope.formData = {};

		// ----- Format Deadline

		var formatDeadline = function() {
			for(var item in $scope.wacana) {
				var deadline = new moment($scope.wacana[item].deadline);
				console.log(deadline);
				$scope.wacana[item].deadline = deadline.format('dddd, Do MMMM YYYY, HH:mm a');
			}
		}

		// ----- GET
		Wacana.get()
			.success(function(data) {
				$scope.wacana = data;
				formatDeadline();
				console.log(data);
			});

		// ----- CREATE
		$scope.createWacana = function() {
			console.log($scope.formData.deadline);
			if($scope.formData.nama != "" && $scope.formData.deskripsi != "" && $scope.formData.deadline != "") {
				$scope.formData.deadline = new Date($scope.formData.deadline);
				console.log($scope.formData.deadline);
				Wacana.create($scope.formData)
					.success(function(data) {
						$scope.formData = {};
						$scope.wacana = data;
						formatDeadline();
						console.log(data);
					});
			}			
		};


		// ----- DELETE
		$scope.deleteWacana = function(id) {
			Wacana.delete(id)
				.success(function(data) {
					$scope.wacana = data;
					formatDeadline();
				})
		};

	}]);
