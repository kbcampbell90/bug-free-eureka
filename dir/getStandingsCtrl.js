var app = angular.module('mainApp', []);

app.controller('standCtrl', function($scope, $http) {
	$http.get('https://erikberg.com/mlb/standings.json')
	.success (function(response) {
		$scope.standings = response.standing;
	}); 
});