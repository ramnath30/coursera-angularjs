(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyInfoService'];
function SignupController(MyInfoService) {
  var $ctrl = this;
  var info1 = MyInfoService.getInfo();
  $ctrl.info = {firstName: info1.firstName, lastName: info1.lastName,
                email: info1.email, phone: info1.phone,
                favoriteItem: info1.favoriteItem};
  $ctrl.favoriteItemError = false;
  $ctrl.saveSwitch = false;

  $ctrl.saveInfo = function (info) {
    console.log("Before item valid check: ", info);
    MyInfoService.getMenuItem(info.favoriteItem).then(
      function(success) {
        $ctrl.favoriteItemError = false;
        MyInfoService.saveInfo(info);
        $ctrl.saveSwitch = true;
      },
      function(error) {
        $ctrl.favoriteItemError = true;
        $ctrl.saveSwitch = false;
      }
    );
  };

  $ctrl.isSaved = function() {
    console.log("saveSwitch", $ctrl.saveSwitch);
    if($ctrl.saveSwitch) {
      return true;
    } else {
      return false;
    }
  }
}


})();
