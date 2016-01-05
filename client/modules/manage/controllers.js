(function (){

var myApp = angular.module('Manage', []);

// MANAGE VIEW
myApp.controller('ManageController', ['$scope', '$http',  function($scope, $http) {

	$scope.logOut = function() {
	}

	var validate = function() {
		if (($scope.item.title === "") || ($scope.item.author === "") || isNaN($scope.item.price))
			return false;

		if (isNaN($scope.item.stock)) $scope.item.stock = 0;
		if ($scope.item.category === "") $scope.item.category = "None";

		return true;
	};

	var clear = function() {
		$scope.item = {title: "",
						author: "",
						price: NaN,
						stock: NaN,
						category: "",
						taxable: false};
	};

	var refresh = function() {
		$http.get('/api/v1.1/menu').success(function(response) {
			$scope.itemlist = response;
		});
	};

	refresh();
	clear();

	$scope.addItem = function() {
		if (!validate()) return;

		$http.post('/api/v1.1/menu/insert', $scope.item).success(function(response) {
			if (response) console.log(response);
			refresh();
		});
		clear();
	};

	$scope.removeItem = function(id) {
		$http.delete('/itemlist/' + id).success(function(response) {
			if (response) console.log(response);
			refresh();
		});
	};

	$scope.editItem = function(id) {
		$http.get('/itemlist/' + id).success(function(response) {
			$scope.item = response;
		});
	};

	$scope.update = function() {
		if (!validate()) return;

		$http.put('/itemlist/' + $scope.item._id, $scope.item).success(function(response) {
			refresh();
		});
		clear();
	};
}]);

})();
