var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http) {
	$http.get('database.json')
	.success (function(response) {
		$scope.persons = response.records;
	}); 
});

app.controller('standCtrl', [ '$scope', '$http', '$sce', function($scope, $http, $sce) {
	var url = 'https://erikberg.com/mlb/standings.json';
	

	$http.jsonp(url, {jsonpCallbackParam: 'callback'})
	.success (function(response) {
		scope.standings = response.standing;
		$scope.url = $sce.trustAsResourceUrl(response.url);
	})

}])