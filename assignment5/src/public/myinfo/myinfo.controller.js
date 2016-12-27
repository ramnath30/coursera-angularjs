(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiBasePath', 'favoriteData', 'info', 'MyInfoService'];
// MyInfoController.$inject = ['info', 'MyInfoService'];
function MyInfoController(ApiBasePath,  favoriteData, info, MyInfoService) {
  var $ctrl = this;
  $ctrl.info = MyInfoService.getInfo();
  $ctrl.favoriteData = MyInfoService.getFavoriteData();
  $ctrl.ApiBasePath = ApiBasePath;
}


})();
