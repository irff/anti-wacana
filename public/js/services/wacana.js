angular.module('todoService', [])
	.factory('Wacana', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/wacana');
			},
			create: function(todoData) {
				return $http.post('/api/wacana', todoData);
			},
			delete: function(id) {
				return $http.delete('/api/wacana/' + id);
			}
		}
	}]);