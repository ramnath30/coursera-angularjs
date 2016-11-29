(function () {

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkMenu = function () {
      $scope.message = getMenuMessage($scope.lunchMenu);
    };
  };

  function getMenuMessage(menu) {
    var trimmed = menu.trim();
    if(trimmed == '') {
      return "Please enter data first.";
    } else {
      var arr = trimmed.split(",");
      if(arr.length <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }
  }

})();
