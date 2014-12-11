angular.module('todoController', [])
	.controller('mainController', ['$scope', '$http', 'Todos', function($scope, $http, Todos) {
		$scope.formData = {};

		$http.get('/api/todos')
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

		$scope.createTodo = function() {
			console.log('begin create');
			$http.post('/api/todos', $scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.todos = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		};

		$scope.deleteTodo = function(id) {
			console.log('begin delete');
			$http.delete('/api/todos/' + id)
				.success(function(data) {
					$scope.todos = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		};
	}]);
