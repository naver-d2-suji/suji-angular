'use strict';

angular.module('POS')

.controller('POSController',
  ['$scope','$rootScope','$http',
  function ($scope, $rootScope, $http) {
    $scope.now = new Date();
    $scope.username = $rootScope.globals.currentUser.username;

    var getStoreInfo = function(){
      $http.get('/api/v1.1/user/store/' + $scope.username).success(function(response) {
        $scope.store = response;
      });
    };
    getStoreInfo();

    var getCategories = function(){
      $http.get('/api/v1.1/category/' + $scope.username).success(function(response){
        $scope.categories = response;
      });
    };
    getCategories();

    var getMenuOnCategory = function(category){
      $http.get('/api/v1.1/menu/' + category).success(function(response){
        $scope.menus = response;
      });
    };





  $scope.food = {
    pizza       : {count: 1, id:2, detail: "Brick Oven Pizza", price: 15},
    donut       : {count: 3, id:3, detail: "Glazed Donut",price: 8},
    tortilla    : {count: 1, id:4, detail: "Tortilla Chips",price: 3},
    burger      : {count: 1, id:5, detail: "Burger",price: 3},
    samosa      : {count: 1, id:6, detail: "Delicious Samosas",price: 3},
    coldcoffee  : {count: 1, id:7, detail: "Cold Coffee",price: 2},
    hotcoffee   : {count: 1, id:8, detail: "Hot Coffee",price: 2},
    coke        : {count: 1, id:9, detail: "Coke",price: 2},
    dietcoke    : {count: 1, id:10, detail: "Diet Coke",price: 2},
    pepsi       : {count: 1, id:11, detail: "Pepsi",price: 2}
  };


  $scope.itemsCnt = 1;
  $scope.order = [];
  $scope.isDisabled = true;

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  $scope.add = function(item) {

    $scope.orderedItemCnt = 1;
    var foodItem = {
      orderedItemCnt : 1,
      totalPrice : item.price,
      itemId : item.id,
      id : $scope.itemsCnt,
      item : item
    };

    // Find if the item is already in Cart
    var cartItems = $.grep($scope.order, function(e){ return e.itemId == item.id; });

    if(cartItems.length > 0  && !isEmpty($scope.order)){
      cartItems[0].orderedItemCnt = ++ cartItems[0].orderedItemCnt;
      cartItems[0].totalPrice = item.price * cartItems[0].orderedItemCnt;
    }
    else{
      $scope.order.push(foodItem);
      $scope.itemsCnt = $scope.order.length;
    }
  };

  $scope.getSum = function() {
    var i = 0,
      sum = 0;

    for(; i < $scope.order.length; i++) {
      sum += parseInt($scope.order[i].totalPrice, 10);
    }
    return sum;
  };

  $scope.addItem = function(item, index) {
    item.orderedItemCnt = ++ item.orderedItemCnt;
    item.totalPrice = item.item.price * item.orderedItemCnt;
  };


  $scope.subtractItem = function(item, $index)
  {
    if (item.orderedItemCnt > 1) {
      item.orderedItemCnt = -- item.orderedItemCnt;
      item.totalPrice = item.item.price * item.orderedItemCnt;
    }
    else{
      $scope.isDisabled = true;
      // isDisabled = false;
      // $("#SubstractItemBtn").prop("disabled", true);
    }
  }

  $scope.deleteItem = function(index) {
    $scope.order.splice(index, 1);
  };

  $scope.checkout = function(index) {
    alert("Order total: $" + $scope.getSum() + "\n\nPayment received. Thanks.");
  };

  $scope.clearOrder = function() {
    $scope.order = [];
  };
}]);

