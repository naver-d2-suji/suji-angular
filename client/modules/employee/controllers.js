(function() {
  var myApp = angular.module('Employee', []);
  myApp.controller('EmployeeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.now = new Date();
    $scope.username = $rootScope.globals.currentUser.username;

    var getStoreInfo = function() {
      $http.get('/api/v1.1/user/store/' + $scope.username).success(function(response) {
        $scope.store = response;
      });
    };
    getStoreInfo();


    // Initialize values for table sorting
    $scope.orderByField = 'id';
    $scope.reverseSort = false;

    $scope.model = {
      employees: [{
        uniqueId: 0,
        id: 3289123456,
        fname: 'Alice',
        lname: 'Copper',
        title: 'fed',
        hours: 0
      }, {
        uniqueId: 1,
        id: 328234567,
        fname: 'Bob',
        lname: 'Smith',
        title: 'proj',
        hours: 20
      }],
      selected: {},
      jobs: {
        fed: 'Front-End Developer',
        proj: 'Project Manager'
      }
    };

    $scope.addEmployee = function(newEmployee) {
      newEmployee = angular.copy(newEmployee);
      newEmployee.uniqueId = $scope.model.employees.length;
      $scope.model.employees.push(newEmployee);
    };

    $scope.deleteEmployee = function(index) {
      $scope.model.employees.splice(index, 1);
    };

    $scope.getTitle = function(id) {
      return $scope.model.jobs[id];

    };

    $scope.setOrderBy = function(value) {
      $scope.orderByField = value;
      $scope.reverseSort = !$scope.reverseSort;
    };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function(employee) {
      if (employee.uniqueId === $scope.model.selected.uniqueId) {
        return 'edit';
      }
      else {
        return 'display';
      }
    };

    $scope.editContact = function(employee) {
      $scope.model.selected = angular.copy(employee);
    };

    $scope.saveContact = function(idx) {
      console.log('Saving employee');
      $scope.model.employees[idx] = angular.copy($scope.model.selected);
      $scope.reset();
    };

    $scope.reset = function() {
      $scope.model.selected = {};
    };

    // Build in search inside the scope
    $scope.search = function(value, index) {
      if (!$scope.searchText) {
        return true;
      }
      return value.lname.indexOf($scope.searchText) > -1;
    };


    ////
    //Employee Profile
    var $dropzone = $('.image_picker');
    var $droptarget = $('.drop_target');
    var $dropinput = $('#inputFile');
    var $dropimg = $('.image_preview');
    var $remover = $('[data-action="remove_current_image"]');

    $dropzone.on('dragover', function() {
      $droptarget.addClass('dropping');
      return false;
    });

    $dropzone.on('dragend dragleave', function() {
      $droptarget.removeClass('dropping');
      return false;
    });

    $dropzone.on('drop', function(e) {
      $droptarget.removeClass('dropping');
      $droptarget.addClass('dropped');
      $remover.removeClass('disabled');
      e.preventDefault();

      var file = e.originalEvent.dataTransfer.files[0],
        reader = new FileReader();

      reader.onload = function(event) {
        $dropimg.css('background-image', 'url(' + event.target.result + ')');
      };

      console.log(file);
      reader.readAsDataURL(file);

      return false;
    });

    $dropinput.change(function(e) {
      $droptarget.addClass('dropped');
      $remover.removeClass('disabled');
      $('.image_title input').val('');

      var file = $dropinput.get(0).files[0],
        reader = new FileReader();

      reader.onload = function(event) {
        $dropimg.css('background-image', 'url(' + event.target.result + ')');
      }
      reader.readAsDataURL(file);
    });

    $remover.on('click', function() {
      $dropimg.css('background-image', '');
      $droptarget.removeClass('dropped');
      $remover.addClass('disabled');
      $('.image_title input').val('');
    });

    $('.image_title input').blur(function() {
      if ($(this).val() != '') {
        $droptarget.removeClass('dropped');
      }
    });
    ////
    
    
  }]);
  // Custom search func
  myApp.filter('searchBy', [function() {
    return function(arr, searchText, prop) {
      if (!searchText) {
        return arr;
      }
      return arr.filter(function(item) {
        return item[prop].indexOf(searchText) > -1;
      });
    };
  }]);

})();
